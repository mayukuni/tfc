import Matches from '../database/models/matches.model';

const getAll = async () => {
  const matches = await Matches.findAll();
  return matches;
};

export default { getAll };
