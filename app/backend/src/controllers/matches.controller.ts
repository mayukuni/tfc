import { Request, Response } from 'express';
import MatchService from '../services/matches.service';

const getAll = async (_req: Request, res: Response) => {
  const matches = await MatchService.getAll();

  return res.status(200).json(matches);
};

const create = async (req: Request, res: Response) => {
  const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = req.body;

  const createdMatch = await MatchService.create({
    homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress,
  });

  res.status(201).json(createdMatch);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;

  await MatchService.update(Number(id));

  return res.status(200).json({ message: 'Finished' });
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;

  const updated = await MatchService.updateById(Number(id), homeTeamGoals, awayTeamGoals);

  return res.status(200).json(updated);
};

export default { getAll, create, update, updateById };
