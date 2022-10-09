import User from '../database/models/user.model';

class UserService {
  constructor(private userModel: typeof User) {}

  async login(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ where: { email } });
    return user;
  }
}

export default UserService;
