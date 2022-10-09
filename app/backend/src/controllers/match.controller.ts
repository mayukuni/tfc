import { Request, Response } from 'express';
import MatchService from '../services/match.service';

class MatchController {
  constructor(private matchService: MatchService) {}

  async getAll(_req: Request, res: Response) {
    const matchs = await this.matchService.getAll();
    return res.status(200).json(matchs);
  }
}

export default MatchController;
