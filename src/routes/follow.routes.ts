import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import * as followController from '../controllers/follow.controller.js';

const router = Router();

// Protected routes - require authentication
router.use(authenticate);

router.post('/:followingId', followController.followUser);
router.delete('/:followingId', followController.unfollowUser);
router.get('/stats/:userId', followController.getFollowStats);
router.get('/followers/:userId', followController.getFollowers);
router.get('/following/:userId', followController.getFollowing);

export default router;