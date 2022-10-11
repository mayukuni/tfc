// import Joi from 'joi';

export default interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

// const UserValidation = Joi.object({
//   email: Joi.string().email(),
// })
