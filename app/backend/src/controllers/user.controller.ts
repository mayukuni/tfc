import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import UserService from '../services/user.service';
import jwt from '../middlewares/jwt';

class UserController {
  constructor(private userService: UserService) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'All fields must be filled' });
    }
    const user = await this.userService.login(email);
    if (!user) return res.status(401).json({ message: 'Incorrect email or password' });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: 'Incorrect email or password' });
    const token = jwt.createToken(email);
    return res.status(200).json({ token });
  }
}

export default UserController;

// // async validate(req: Request, res: Response) {
// //   const token = req.headers.authorization;
// //   jwt.validateToken(token);
// //   res.status(200).json({ role });
// // };
