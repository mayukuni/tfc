import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const router = Router();

router.get('/leaderboard/home', LeaderboardController.getAllHome);
router.get('/leaderboard/away', LeaderboardController.getAllAway);

export default router;
