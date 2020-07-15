import { Router } from 'express';
import AuthService from '../services/AuthService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authUser = new AuthService();

  const { user, token } = await authUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionRouter;
