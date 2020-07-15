import { Router } from 'express';
import { getRepository } from 'typeorm';
import Objective from '../models/Objective';
import CreateObjectiveService from '../services/CreateObjectiveService';
import ensureAuth from '../middlewares/ensureAuth';
import DeleteObjectiveService from '../services/DeleteObjectiveService';
import UpdateObjectiveService from '../services/UpdateObjectiveService';

const objectiveRouter = Router();

objectiveRouter.use(ensureAuth);

objectiveRouter.get('/', async (request, response) => {
  const objectiveRepository = getRepository(Objective);

  const objectives = await objectiveRepository.find();

  objectives.forEach(index => delete index.tasked.password);

  return response.json(objectives);
});

objectiveRouter.post('/', async (request, response) => {
  const { date, objective } = request.body;

  const createObjective = new CreateObjectiveService();

  const newObjective = await createObjective.execute({
    user_id: request.user.id,
    date,
    objective,
  });

  return response.json(newObjective);
});

objectiveRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { date, objective, conclusion_progress, user_id } = request.body;

  const createObjective = new UpdateObjectiveService();

  const newObjective = await createObjective.execute({
    id,
    date,
    objective,
    conclusion_progress,
    user_id,
  });

  return response.json(newObjective);
});

objectiveRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteObjective = new DeleteObjectiveService();

  await deleteObjective.execute(id);

  return response.status(204).send();
});

export default objectiveRouter;
