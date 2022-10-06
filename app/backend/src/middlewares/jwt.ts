import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwt = {
  createToken: (data: string) => {
    const token = sign({ data }, JWT_SECRET, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
    return token;
  },
};

export default jwt;
