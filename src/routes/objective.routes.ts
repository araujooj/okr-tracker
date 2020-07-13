import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const objectiveRouter = Router();

objectiveRouter.get('/', async (request, response) => {
  // TODO
});

objectiveRouter.post('/', async (request, response) => {
  // TODO
});

objectiveRouter.delete('/:id', async (request, response) => {
  // TODO
});

objectiveRouter.post('/import', async (request, response) => {
  // TODO
});

export default objectiveRouter;
