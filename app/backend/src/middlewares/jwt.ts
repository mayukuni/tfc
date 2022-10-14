import { Request, Response } from 'express';
import { sign, verify, JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const createToken = (email: string, role: string) => {
  const token = sign({ email, role }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

// refatorar depois
// const validateToken = (token: string | undefined) => {
//   if (!token) return { error: { code: 401, message: { message: 'Token not found' } } };
//   const data = verify(token, JWT_SECRET) as JwtPayload;
//   return data;
// };
const validateToken = (req: Request, res: Response) => {
  const token = req.headers.authorization;
  if (!token) return res.status(404).json({ message: 'Token not found' });
  const data = verify(token, JWT_SECRET) as JwtPayload;
  res.status(200).json({ role: data.role });
};

export default { createToken, validateToken };
