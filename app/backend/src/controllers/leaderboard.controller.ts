import { Response, Request } from 'express';
import LeaderBoardService from '../services/leaderboard.service';

const getAllHome = async (req: Request, res: Response) => {
  const leaderBoard = await LeaderBoardService.getHomeLeaderBoard();

  return res.status(200).json(leaderBoard);
};

const getAllAway = async (req: Request, res: Response) => {
  const leaderBoard = await LeaderBoardService.getAwayLeaderBoard();

  return res.status(200).json(leaderBoard);
};

export default { getAllHome, getAllAway };
