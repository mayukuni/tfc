import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import userService from '../services/user.service';
import jwt from '../middlewares/jwt';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(400).json({ message: 'All fields must be filled' });
  }
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const validEmail = email.match(regex);
  if (!validEmail) return res.status(401).json({ message: 'Incorrect email or password' });
  const user = await userService.login(email, password);
  if (!user) return res.status(401).json({ message: 'teste' });
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ message: 'Incorrect email or password' });
  const token = jwt.createToken(user.email);
  return res.status(200).json({ token });
};

const validate = async (req: Request, res: Response) => {
  const { role } = req.body;
  const token = req.headers.authorization;
  jwt.validateToken(token);
  res.status(200).json(role);
};

export default { login, validate };
