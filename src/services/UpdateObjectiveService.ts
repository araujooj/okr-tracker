/* eslint-disable no-unused-expressions */
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Objective from '../models/Objective';

interface Request {
  id: string;
  objective: string;
  date: Date;
  user_id: string;
  conclusion_progress: number;
}

export default class UpdateObjectiveService {
  public async execute({
    id,
    date,
    objective,
    user_id,
    conclusion_progress,
  }: Request): Promise<Objective> {
    const objectiveRepository = getRepository(Objective);
    const newObjective = await objectiveRepository.findOne(id);

    if (!newObjective) {
      throw new AppError('Invalid object uuid', 401);
    }
    date ? (newObjective.date = date) : newObjective.date;

    user_id ? (newObjective.user_id = user_id) : newObjective.user_id;

    objective ? (newObjective.objective = objective) : newObjective.objective;

    conclusion_progress
      ? (newObjective.conclusion_progress = conclusion_progress)
      : newObjective.conclusion_progress;

    await objectiveRepository.save(newObjective);

    return newObjective;
  }
}
