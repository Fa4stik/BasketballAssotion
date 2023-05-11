import $api from "./instance";

const getPlayersByFilter = async (
  seasonId = 3,
  pageNum = 1,
  teamId = null,
  playerName = null,
  startLetter = null
) => {
  return $api.get("/PlayerInTeam/GetPlayerSearch", {
    params: {
      pageNum,
      pageSize: 5,
      seasonId,
      teamId,
      playerName,
      startLetter,
    },
  });
};
const getPlayerDetails = async (playerId) => {
  return $api.get("/Player/GetPlayerDetails", {
    params: {
      playerId: playerId,
    },
  });
};
const getPlayerStatistics = async (playerId, dateStart, dateEnd) => {
  return $api.get("/Player/getPlayerStatistics", {
    params: {
      playerId: playerId,
      firstDate: dateStart + "T00:00:00",
      secondDate: dateEnd + "T00:00:00",
    },
  });
};
export const playersApi = {
  getPlayersByFilter,
  getPlayerDetails,
  getPlayerStatistics,
};
