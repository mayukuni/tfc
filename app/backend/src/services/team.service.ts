import Team from '../database/models/teams.model';

const getAll = async () => {
  const teams = await Team.findAll();
  return teams;
};

export default { getAll };
