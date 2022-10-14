import Matches from '../database/models/matches.model';
import Team from '../database/models/teams.model';
import { IMatch } from '../interfaces/match.interface';

const getAll = async () => {
  const matches = await Matches.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ],
  });

  return matches;
};

const create = async (matches: IMatch) => {
  const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals } = matches;
  const inProgress = true;

  const match = await Matches.create({
    homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress,
  });

  return match;
};

export default { getAll, create };
