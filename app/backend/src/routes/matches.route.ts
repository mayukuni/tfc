import { Router } from 'express';
import MatchController from '../controllers/matches.controller';
import jwt from '../middlewares/jwt.middleware';
import middleware from '../middlewares/matches.middleware';

const router = Router();

router.get('/matches', MatchController.getAll);
router.post('/matches', jwt.validateToken, middleware.validateMatches, MatchController.create);
router.patch('/matches/:id/finish', MatchController.update);
router.patch('/matches/:id', MatchController.updateById);

export default router;
