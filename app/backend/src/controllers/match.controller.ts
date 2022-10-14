import { Request, Response } from 'express';
import MatchService from '../services/match.service';

const getAll = async (_req: Request, res: Response) => {
  const matches = await MatchService.getAll();
  return res.status(200).json(matches);
};

export default { getAll };
