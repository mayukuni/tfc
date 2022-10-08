import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const router = Router();

router.get('/teams', TeamController.getAll);
router.get('/teams:id', TeamController.getById);

export default router;
