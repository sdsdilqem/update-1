import prisma from '../config/database.js';
import { AppError } from '../utils/errors.js';
import logger from '../utils/logger.js';
import type { FollowStats, FollowUser } from '../types/follow';

class FollowService {
  async followUser(followerId: string, followingId: string): Promise<void> {
    try {
      // Check if users exist
      const [follower, following] = await Promise.all([
        prisma.user.findUnique({ where: { id: followerId } }),
        prisma.user.findUnique({ where: { id: followingId } })
      ]);

      if (!follower || !following) {
        throw new AppError('İstifadəçi tapılmadı', 404);
      }

      // Check if already following
      const existingFollow = await prisma.follow.findFirst({
        where: {
          followerId,
          followingId
        }
      });

      if (existingFollow) {
        throw new AppError('Artıq izləyirsiniz', 400);
      }

      // Create follow relationship
      await prisma.follow.create({
        data: {
          followerId,
          followingId
        }
      });

      logger.info(`User ${followerId} followed user ${followingId}`);
    } catch (error) {
      logger.error('Follow failed:', error);
      throw error instanceof AppError ? error : new AppError('İzləmə xətası', 500);
    }
  }

  async unfollowUser(followerId: string, followingId: string): Promise<void> {
    try {
      const follow = await prisma.follow.findFirst({
        where: {
          followerId,
          followingId
        }
      });

      if (!follow) {
        throw new AppError('İzləmə tapılmadı', 404);
      }

      await prisma.follow.delete({
        where: { id: follow.id }
      });

      logger.info(`User ${followerId} unfollowed user ${followingId}`);
    } catch (error) {
      logger.error('Unfollow failed:', error);
      throw error instanceof AppError ? error : new AppError('İzləmədən çıxma xətası', 500);
    }
  }

  async getFollowStats(userId: string): Promise<FollowStats> {
    try {
      const [followersCount, followingCount] = await Promise.all([
        prisma.follow.count({ where: { followingId: userId } }),
        prisma.follow.count({ where: { followerId: userId } })
      ]);

      return { followersCount, followingCount };
    } catch (error) {
      logger.error('Failed to get follow stats:', error);
      throw new AppError('İzləmə statistikası alına bilmədi', 500);
    }
  }

  async getFollowers(userId: string, currentUserId?: string): Promise<FollowUser[]> {
    try {
      const followers = await prisma.follow.findMany({
        where: { followingId: userId },
        include: {
          follower: {
            select: {
              id: true,
              username: true,
              avatar: true,
              verificationLevel: true
            }
          }
        }
      });

      // If currentUserId is provided, check if the current user follows these users
      if (currentUserId) {
        const currentUserFollowing = await prisma.follow.findMany({
          where: { followerId: currentUserId },
          select: { followingId: true }
        });
        const followingIds = new Set(currentUserFollowing.map(f => f.followingId));

        return followers.map(f => ({
          id: f.follower.id,
          username: f.follower.username,
          avatar: f.follower.avatar,
          verificationLevel: f.follower.verificationLevel,
          isFollowing: followingIds.has(f.follower.id)
        }));
      }

      return followers.map(f => ({
        ...f.follower,
        isFollowing: false
      }));
    } catch (error) {
      logger.error('Failed to get followers:', error);
      throw new AppError('İzləyiciləri almaq mümkün olmadı', 500);
    }
  }

  async getFollowing(userId: string, currentUserId?: string): Promise<FollowUser[]> {
    try {
      const following = await prisma.follow.findMany({
        where: { followerId: userId },
        include: {
          following: {
            select: {
              id: true,
              username: true,
              avatar: true,
              verificationLevel: true
            }
          }
        }
      });

      if (currentUserId) {
        const currentUserFollowing = await prisma.follow.findMany({
          where: { followerId: currentUserId },
          select: { followingId: true }
        });
        const followingIds = new Set(currentUserFollowing.map(f => f.followingId));

        return following.map(f => ({
          id: f.following.id,
          username: f.following.username,
          avatar: f.following.avatar,
          verificationLevel: f.following.verificationLevel,
          isFollowing: followingIds.has(f.following.id)
        }));
      }

      return following.map(f => ({
        ...f.following,
        isFollowing: false
      }));
    } catch (error) {
      logger.error('Failed to get following:', error);
      throw new AppError('İzlənənləri almaq mümkün olmadı', 500);
    }
  }
}

export const followService = new FollowService();