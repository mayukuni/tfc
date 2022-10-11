import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Users from '../database/models/user.model';
import UserService from '../services/user.service';

const router = Router();
const userService = new UserService(Users);
const userController = new UserController(userService);

router.post('/login', (req, res) => userController.login(req, res));

export default router;
