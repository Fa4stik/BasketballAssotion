import $api from "./instance"


const getPlayersByFilter = async (seasonId = 3, pageNum = 1, teamId = null, playerName = null, startLetter = null) => {
    return $api.get('/PlayerInTeam/GetPlayerSearch', {
        params: {
            pageNum,
            pageSize: 5,
            seasonId,
            teamId,
            playerName,
            startLetter
        }
    })
}

export const playersApi = { getPlayersByFilter }