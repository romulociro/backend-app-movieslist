import { hash } from 'bcryptjs';
import usersRepository from '../repositories/UserRepository';

interface IRequest {
  username: string;
  password: string;
}

interface IUserModel {
  date: Date;
  username: string;
  password?: string;
}

class CreateUserService {
  public async execute({ username, password }: IRequest): Promise<IUserModel> {
    const checkUserExists = await usersRepository.findOne({
      username,
    });
    if (checkUserExists) {
      throw new Error('user already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
