import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import usersRepository from '../repositories/UserRepository';

interface IRequest {
  username: string;
  password: string;
}

interface IUserModel {
  date: Date;
  username: string;
  password: string;
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
      throw new Error('username/password combination incorrect');
    }

    // Comparar o password informado pelo user com o criptografado
    const passwordMatched = await compare(password, user.password);

    // Mesmo erro por questão de segurança
    if (!passwordMatched) {
      throw new Error('username/password combination incorrect');
    }

    const token = sign({}, 'a459c3ffac1332f89fc41f4024db7758', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
