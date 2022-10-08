// import * as bcrypt from 'bcryptjs';
import User from '../database/models/user.model';

const login = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return null;
  // const validPassword = await bcrypt.compare(password, user.password);
  // if (!validPassword) return null;
  return user;
};

export default { login };
