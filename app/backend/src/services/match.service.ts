import Matches from '../database/models/matches.model';
import Team from '../database/models/teams.model';

const getAll = async () => {
  const matches = await Matches.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ],
  });
  return matches;
};

export default { getAll };
