export interface IMatch {
  id?: number,
  homeTeam: number,
  homeTeamGoals: string,
  awayTeam: string,
  awayTeamGoals: string,
  inProgress?: boolean,
}
