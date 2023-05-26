import $api from "./instance"

const getMatchup = async (matchupId) => {
    try {
        const {data} = await $api.get('/Matchup/GetMatchup?id=' + matchupId);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getMatchupDetailTeamStatus = async (matchupId) => {
    try {
        const {data} = await $api.get('/Matchup/GetMatchupDetailTeamStatus?id=' + matchupId);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getQuarterMatchupDetail = async (matchupId) => {
    try {
        const {data} = await $api.get('/Matchup/GetQuarterMatchupDatail?matchupId=' + matchupId);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getMatchupLog = async (matchupId) => {
    try {
        const {data} = await $api.get('/MatchupLog/GetMatchupLog?matchupId=' + matchupId);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getMatchupQuarterLog = async (matchupId, quarter) => {
    try {
        const {data} = await $api.get('/MatchupLog/GetMatchupQuarterLog?matchupId=' + matchupId + '&quarter=' + quarter);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

const getMatchupRosters = async (matchupId, quarter) => {
    try {
        const {data} = await $api.get('/PlayerInTeam/GetShortChart?matchupId=' + matchupId);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

export const matchupsDetailApi = { 
    getMatchup,
    getMatchupDetailTeamStatus,
    getQuarterMatchupDetail,
    getMatchupLog,
    getMatchupQuarterLog,
    getMatchupRosters
};