import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const createToken = (data: string) => {
  const token = sign({ data }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = (token: string | undefined) => {
  if (!token) return { error: { code: 401, message: { message: 'Token not found' } } };
  const data = verify(token, JWT_SECRET);
  return data;
};

export default { createToken, validateToken };
