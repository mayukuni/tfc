import { Request, Response } from 'express';
import teamService from '../services/team.service';

const getAll = async (req: Request, res: Response) => {
  const teams = await teamService.getAll();
  res.status(200).json(teams);
};

export default { getAll };
