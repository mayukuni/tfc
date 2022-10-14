import { Request, Response } from 'express';
import UserService from '../services/user.service';
import jwt from '../middlewares/jwt';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const user = await UserService.login(email, password);

  if (!user) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const token = jwt.createToken(user.email, user.role);

  return res.status(200).json({ token });
};

// const validate = async (req: Request, res: Response) => {
//   const token = req.headers.authorization;
//   const { user } = req.body;
//   jwt.validateToken(token);
//   res.status(200).json({ role: user.role });
// };

export default { login };
