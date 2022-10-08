import { Request, Response } from 'express';
import userService from '../services/user.service';
import jwt from '../middlewares/jwt';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(400).json({ message: 'All fields must be filled' });
  }
  const user = await userService.login(email, password);
  if (!user) return res.status(401).json({ message: 'teste' });
  const token = jwt.createToken(user.email);
  return res.status(200).json({ token });
};

export default { login };
