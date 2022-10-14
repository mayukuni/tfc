import { Router } from 'express';
import UserController from '../controllers/user.controller';
import jwt from '../middlewares/jwt';

const router = Router();

router.post('/login', UserController.login);
router.get('/login/validate', jwt.validateToken);

export default router;
