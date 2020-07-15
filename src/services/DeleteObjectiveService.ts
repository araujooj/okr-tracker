import { DeleteResult, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Objective from '../models/Objective';

class DeleteObjectiveService {
  public async execute(id: string): Promise<DeleteResult> {
    const objectiveRepository = getRepository(Objective);

    const objectiveExists = await objectiveRepository.findOne({
      where: { id },
    });

    if (!objectiveExists) {
      throw new AppError('This uuid is invalid', 401);
    }

    const objective = await objectiveRepository.delete(id);

    return objective;
  }
}

export default DeleteObjectiveService;
