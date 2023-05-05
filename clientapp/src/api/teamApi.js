import $api from "./instance"

const getTeamNames = async () => {
  return $api.get('/Team/GetTeamNames')
}

const getTeamStadium = async (teamId) => {
  return $api.get(`/Team/GetStadiumForTeam`, {
    params: { teamId }
  })
}

const getConferenceNames = async () => {
  return $api.get('/Conference')
}


const getDivisionsWithTeams = async (conferenceId) => {
  return $api.get("/Team/GetDivisionsWithTeamsAsycn", {
    params: {
      conferenceid: conferenceId,
    },
  });
};


const createNewMatchup = async (form) => {
  //извините, но пусть будет так
  let raw = new FormData()
  raw.append('SeasonId', form.season)
  raw.append('MatchupTypeId', form.type)
  raw.append('Date', form.date)
  raw.append('Location', form.location)
  raw.append('TeamAwayId', form.team_away.id)
  raw.append('TeamHomeId', form.team_home.id)

  $api.post('Matchup/PostNewMatchup', raw)
}


export const teamApi = { getTeamNames, getTeamStadium, getConferenceNames, getDivisionsWithTeams, createNewMatchup };