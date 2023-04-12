import $api from "./instance"

const getTeamNames = async () => {
    return $api.get('/Team/GetTeamNames')
}

export const teamApi = { getTeamNames }