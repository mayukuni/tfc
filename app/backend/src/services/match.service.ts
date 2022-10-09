import Matches from '../database/models/matches.model';

class MatchService {
  constructor(private matchModel: typeof Matches) {}

  async getAll() {
    const Matchs = await this.matchModel.findAll();
    return Matchs;
  }
}

export default MatchService;
