import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { username, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      username,
      password,
    });

    user.password = undefined;

    return response.json({ user, token });
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
