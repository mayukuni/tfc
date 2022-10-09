import { Request, Response } from 'express';
import teamService from '../services/team.service';

const getAll = async (req: Request, res: Response) => {
  const teams = await teamService.getAll();
  return res.status(200).json(teams);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await teamService.getById(Number(id));
  return res.status(200).json(team);
};

export default { getAll, getById };
