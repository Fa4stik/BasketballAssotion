import $api from "./instance"

const getTeamNames = async () => {
    return $api.get('/Team/GetTeamNames')
}
const getConferenceNames = async () => { 
    return $api.get('/Conference')
}
const getDivisionsWithTeams = async (conferenceId) => {
  return $api.get("/Team/GetDivisionsWithTeamsAsycn",  {
    params: {
      conferenceid: conferenceId,
    },
  });
};


export const teamApi = { getTeamNames, getConferenceNames, getDivisionsWithTeams };