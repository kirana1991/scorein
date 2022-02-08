export const HOST = 'http://demo.scorein.co.in';
const API_VERSION_1 = '/api'

export const HOME = `${API_VERSION_1}/home`;
export const MATCHES = `${API_VERSION_1}/match-list`;
export const TOURNAMENT = `${API_VERSION_1}/tournament-list`;
export const TOURNAMENT_MATCH_LIST = (tournamentId) => `${API_VERSION_1}/tournament-match-list/${tournamentId}`;
export const TOURNAMENT_TEAMS = (tournamentId) => `${API_VERSION_1}/tournament-teams/${tournamentId}`;
export const TOURNAMENT_POINTS_TABLE = (tournamentId) => `${API_VERSION_1}/points-table/${tournamentId}`;
export const TOURNAMENT_STATS = (tournamentId) => `${API_VERSION_1}/tournament-stats/${tournamentId}`;
export const MATCH_INFO = (matchId) => `${API_VERSION_1}/match-info/${matchId}`;
export const MATCH_LIVE = (matchId) => `${API_VERSION_1}/live-score/${matchId}`;
export const MATCH_SCORE_CARD = (matchId) => `${API_VERSION_1}/scorecard/${matchId}`;
export const PLAYER_PROFILE = (playerId) => `${API_VERSION_1}/player-tournament-info/${playerId}`;
export const POSTDEVICEINFO = `${API_VERSION_1}/tournament-list`;