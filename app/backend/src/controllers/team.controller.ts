import { Request, Response } from 'express';
import TeamService from '../services/team.service';

const getAll = async (req: Request, res: Response) => {
  const teams = await TeamService.getAll();

  return res.status(200).json(teams);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const team = await TeamService.getById(Number(id));

  return res.status(200).json(team);
};

export default { getAll, getById };
