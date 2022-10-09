import Team from '../database/models/teams.model';

class TeamService {
  constructor(private teamModel: typeof Team) {}

  async getAll(): Promise<Team[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  async getById(id: number): Promise<Team | null> {
    const team = await this.teamModel.findByPk(id);
    return team;
  }
}

export default TeamService;
