import { Router } from 'express';
import MatchController from '../controllers/match.controller';
import Matches from '../database/models/matches.model';
import MatchService from '../services/match.service';

const router = Router();
const matchService = new MatchService(Matches);
const matchController = new MatchController(matchService);

router.get('/matches', (req, res) => matchController.getAll(req, res));

export default router;
