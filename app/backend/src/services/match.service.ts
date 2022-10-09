import Matches from '../database/models/matches.model';

class MatchService {
  constructor(private matchModel: typeof Matches) {}

  async getAll(): Promise<Matches[]> {
    const matches = await this.matchModel.findAll();
    return matches;
  }
}

export default MatchService;
