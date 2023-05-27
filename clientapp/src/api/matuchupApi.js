import $api from "./instance"

const getTeamNames = async () => {
  return $api.get('/Team/GetTeamNames')
}

const GetQuarterMatchupDetail = async (matchupId) => {
  return $api.get(`/Matchup/GetQuarterMatchupDatail`, {
    params: { matchupId }
  })
}

const GetMatchup = async (id) => {
  return $api.get(`/Matchup/GetMatchup`, {
    params: { id }
  })
}

const GetMatchupDetailTeamStatus = async (id) => {
  return $api.get(`/Matchup/GetMatchupDetailTeamStatus`, {
    params: { id }
  })
}

const GetMatchupLog = async (matchupId) => {
  return $api.get(`/Matchup/GetMatchupLog`, {
    params: { matchupId }
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


export const matchupApi = {
  GetQuarterMatchupDetail,
  GetMatchup,
  GetMatchupDetailTeamStatus,
  GetMatchupLog,
  getTeamNames,
  getConferenceNames,
  getDivisionsWithTeams,
  createNewMatchup
};