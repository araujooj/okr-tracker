import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Objective from '../models/Objective';
import User from '../models/User';

interface Request {
  date: Date;
  user_id: string;
  objective: string;
}

class CreateObjectiveService {
  public async execute({
    date,
    user_id,
    objective,
  }: Request): Promise<Objective> {
    const ObjectiveRepository = getRepository(Objective);
    const UserRepository = getRepository(User);

    const findUser = await UserRepository.findOne({
      where: {
        id: user_id,
      },
    });

    if (!findUser) {
      throw new AppError('User not found, please inform a real user');
    }

    const newObjective = ObjectiveRepository.create({
      objective,
      date,
      user_id,
      conclusion_progress: 0,
    });

    await ObjectiveRepository.save(newObjective);

    return newObjective;
  }
}

export default CreateObjectiveService;
