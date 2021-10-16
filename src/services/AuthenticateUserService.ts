import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import usersRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';

interface IRequest {
  username: string;
  password: string;
}

interface IUserModel {
  date: Date;
  username: string;
  password?: string;
}

interface IResponse {
  user: IUserModel;
  token: string;
}

class AuthenticateUserService {
  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await usersRepository.findOne({ username });

    // Verificar se o usuario existe retorna user ou pass incorret por questão de segurança
    if (!user) {
      throw new AppError('username/password combination incorrect', 401);
    }

    // Comparar o password informado pelo user com o criptografado
    const passwordMatched = await compare(password, user.password);

    // Mesmo erro por questão de segurança
    if (!passwordMatched) {
      throw new AppError('username/password combination incorrect', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
