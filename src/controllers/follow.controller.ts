import { followService } from '../services/follow.service.js';
import { AppError } from '../utils/errors.js';
import logger from '../utils/logger.js';

export const followUser = async (req, res) => {
  try {
    const followerId = req.user.id;
    const { followingId } = req.params;

    await followService.followUser(followerId, followingId);
    res.status(200).json({ success: true });
  } catch (error) {
    logger.error('Follow user failed:', error);
    throw new AppError(error.message, error.statusCode || 500);
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const followerId = req.user.id;
    const { followingId } = req.params;

    await followService.unfollowUser(followerId, followingId);
    res.status(200).json({ success: true });
  } catch (error) {
    logger.error('Unfollow user failed:', error);
    throw new AppError(error.message, error.statusCode || 500);
  }
};

export const getFollowStats = async (req, res) => {
  try {
    const { userId } = req.params;
    const stats = await followService.getFollowStats(userId);
    res.json(stats);
  } catch (error) {
    logger.error('Get follow stats failed:', error);
    throw new AppError(error.message, error.statusCode || 500);
  }
};

export const getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUserId = req.user?.id;
    const followers = await followService.getFollowers(userId, currentUserId);
    res.json(followers);
  } catch (error) {
    logger.error('Get followers failed:', error);
    throw new AppError(error.message, error.statusCode || 500);
  }
};

export const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUserId = req.user?.id;
    const following = await followService.getFollowing(userId, currentUserId);
    res.json(following);
  } catch (error) {
    logger.error('Get following failed:', error);
    throw new AppError(error.message, error.statusCode || 500);
  }
};