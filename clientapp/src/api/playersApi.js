import $api from "./instance"


const getPlayersBySeason = async (seasonId = 3) => {
    return $api.get('/PlayerInTeam/GetPlayerSearch', {
        params: {
            seasonId
        }
    })
}

const getPlayersByTeam = async (teamId) => {
    return $api.get('/PlayerInTeam/GetPlayerSearch', {
        params: {
            seasonId: 3,
            teamId
        }
    })
}

const getPlayersByPlayer = async (playerName) => {
    return $api.get('/PlayerInTeam/GetPlayerSearch', {
        params: {
            seasonId: 3,
            playerName
        }
    })
}

const getPlayersByLetter = async (startLetter) => {
    return $api.get('/PlayerInTeam/GetPlayerSearch', {
        params: {
            seasonId: 3,
            startLetter
        }
    })
}

export const playersApi = { getPlayersBySeason, getPlayersByTeam, getPlayersByLetter, getPlayersByPlayer }