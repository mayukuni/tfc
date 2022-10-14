import { Request, Response } from 'express';
import MatchService from '../services/match.service';

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

export default { getAll, create };
