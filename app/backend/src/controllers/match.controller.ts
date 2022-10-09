import { Request, Response } from 'express';
import matchService from '../services/match.service';

const getAll = async (req: Request, res: Response) => {
  const matches = matchService.getAll();
  return res.status(200).json(matches);
};

export default { getAll };
