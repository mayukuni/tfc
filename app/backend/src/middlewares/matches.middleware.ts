import { Request, Response, NextFunction } from 'express';
import Team from '../database/models/teams.model';

const validateMatches = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const teamHome = await Team.findOne({ where: { id: homeTeam } });
  const teamAway = await Team.findOne({ where: { id: awayTeam } });

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  if (!teamHome || !teamAway) {
    return res.status(404).json({
      message: 'There is no team with such id!',
    });
  }

  next();
};

export default { validateMatches };
