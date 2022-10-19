import Team from '../database/models/teams.model';
import Matches from '../database/models/matches.model';

const teamBoard = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '',
};

const getAllTeams = async () => {
  const teams = await Team.findAll();

  return teams;
};

const getAllMatches = async () => {
  const matches = await Matches.findAll({ where: { inProgress: false } });

  return matches;
};

const homeCalculate = (team: Team, matches: Matches[]) => {
  const total = { ...teamBoard, name: team.teamName };

  matches.forEach((match) => {
    if (team.id === match.homeTeam) {
      total.totalGames += 1;
      total.goalsFavor += match.homeTeamGoals;
      total.goalsOwn += match.awayTeamGoals;
      total.goalsBalance = total.goalsFavor - total.goalsOwn;
      if (match.awayTeamGoals === match.homeTeamGoals) {
        total.totalPoints += 1; total.totalDraws += 1;
      } else if (match.awayTeamGoals < match.homeTeamGoals) {
        total.totalPoints += 3; total.totalVictories += 1;
      } else {
        total.totalLosses += 1;
      }
      total.efficiency = ((total.totalPoints / (total.totalGames * 3)) * 100).toFixed(2);
    }
  });

  return total;
};

const awayCalculate = (team: Team, matches: Matches[]) => {
  const total = { ...teamBoard, name: team.teamName };

  matches.forEach((match) => {
    if (team.id === match.awayTeam) {
      total.totalGames += 1;
      total.goalsFavor += match.awayTeamGoals;
      total.goalsOwn += match.homeTeamGoals;
      total.goalsBalance = total.goalsFavor - total.goalsOwn;
      if (match.awayTeamGoals === match.homeTeamGoals) {
        total.totalPoints += 1; total.totalDraws += 1;
      } else if (match.awayTeamGoals > match.homeTeamGoals) {
        total.totalPoints += 3; total.totalVictories += 1;
      } else {
        total.totalLosses += 1;
      }
      total.efficiency = ((total.totalPoints / (total.totalGames * 3)) * 100).toFixed(2);
    }
  });

  return total;
};

const getHomeLeaderBoard = async () => {
  const teams = await getAllTeams();
  const matches = await getAllMatches();
  const result = teams.map((team) => homeCalculate(team, matches));
  result.sort((a, b) => b.totalPoints - a.totalPoints || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance || b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn);
  return result;
};

const getAwayLeaderBoard = async () => {
  const teams = await getAllTeams();
  const matches = await getAllMatches();
  const result = teams.map((team) => awayCalculate(team, matches));
  result.sort((a, b) => b.totalPoints - a.totalPoints || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance || b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn);
  return result;
};

export default { getHomeLeaderBoard, getAwayLeaderBoard };
