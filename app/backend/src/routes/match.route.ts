import { Router } from 'express';
import MatchController from '../controllers/match.controller';

const router = Router();

router.get('/matches', MatchController.getAll);

export default router;
