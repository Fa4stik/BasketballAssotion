import $api from "./instance"

const getMatchups = async (date) => {
    try {
        const {data} = await $api.get('/Matchup/GetMathups?date=' + date);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

export const matchupsApi = { 
    getMatchups,
};