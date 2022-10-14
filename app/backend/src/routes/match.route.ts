import { Router } from 'express';
import MatchController from '../controllers/match.controller';
import jwt from '../middlewares/jwt';
import middleware from '../middlewares/matches';

const router = Router();

router.get('/matches', MatchController.getAll);
router.post('/matches', jwt.validateToken, middleware.validateMatches, MatchController.create);
router.patch('/matches/:id/finish', MatchController.update);

export default router;
