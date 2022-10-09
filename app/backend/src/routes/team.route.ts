import { Router } from 'express';
import TeamController from '../controllers/team.controller';
import teams from '../database/models/teams.model';
import TeamService from '../services/team.service';

const router = Router();
const teamService = new TeamService(teams);
const teamController = new TeamController(teamService);

router.get('/teams', (req, res) => teamController.getAll(req, res));
router.get('/teams:id', (req, res) => teamController.getById(req, res));

export default router;
