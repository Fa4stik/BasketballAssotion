import $api from "./instance"

const getSeasons = async () => {
    try {
        const {data} = await $api.get('/Season/GetSeasons');
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

const getRosterForTeam = async (teamId, seasonId = 3) => {
    try {
        const {data} = await $api.get('/PlayerInTeam/GetRosterForTeam', {
            params: {
                teamId,
                seasonId
            }
        });
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getMatchupsForTeam = async (teamId, seasonId = 1) => {
    try {
        const {data} = await $api.get('/Matchup/GetMatchupsForTeam', {
            params: {
                teamId,
                seasonId
            }
        });
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getLineupForTeam = async (teamId, seasonId = 1) => {
    try {
        const {data} = await $api.get('/Position/getPositionWithPlayersInTeam', {
            params: {
                teamId,
                seasonId
            }
        });
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

export const teamDetailApi = { 
    getSeasons,
    getRosterForTeam,
    getMatchupsForTeam,
    getLineupForTeam
};