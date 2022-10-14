import { NextFunction, Request, Response } from 'express';
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
const validate = (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const data = verify(token, JWT_SECRET) as JwtPayload;

  res.status(200).json({ role: data.role });
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default { createToken, validate, validateToken };
