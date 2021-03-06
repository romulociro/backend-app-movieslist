import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { username, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      username,
      password,
    });

    return response
      .status(201)
      .json({ username: user.username, date: user.date });
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
