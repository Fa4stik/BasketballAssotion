import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Button
} from "@mui/material"
import TabPanel from "./TabPanel"
import { teamDetailApi } from "../api/teamDetail.api"
import { formatDate, formatTime } from "../utils/date"
import lineupImage from "../assets/png/lineup.png"

const TeamDetail = ({ setHeaderTitle }) => {
    const searchParams = new URLSearchParams(useLocation().search)
    const team = JSON.parse(decodeURIComponent(searchParams.get('team')))

    const conference = searchParams.get('conference')
    const firstTab = +searchParams.get('location')
    const division = searchParams.get('division')

    const [teamInfo, setTeamInfo] = useState(null)
    const [seasons, setSeasons] = useState(null)
    const [currentSeason, setCurrentSeason] = useState(3)

    const [tab, setTab] = useState(0)

    const handleTabChange = (e, newValue) => {
        setTab(newValue)
    }

    const getData = async (seasonId) => {
        try {
            const seasons = await teamDetailApi.getSeasons();
            setSeasons(seasons);

            const teamInfo = {
                roster: await teamDetailApi.getRosterForTeam(team.teamid, currentSeason),
                matchups: await teamDetailApi.getMatchupsForTeam(team.teamid, currentSeason),
                lineup: await teamDetailApi.getLineupForTeam(team.teamid, currentSeason)
            }

            setTeamInfo(teamInfo);
        } catch (error) {
            console.error(error);
        };
    };

    const getPlayersByPosition = (position) => {
        const players = teamInfo.lineup.filter(el => {
            return el.positionAbbr.trim() === position
        })[0].players;
        return players;
    };

    useEffect(() => {
        const headerTitle = "Team Detail";
        setHeaderTitle(headerTitle);
        document.title = headerTitle;
        setTab(firstTab)
        getData()
    }, [])

    return (
        <Box>
            <Box className="flex gap-x-10 items-center mt-28 mb-16 ml-16">
                <img
                    alt={team.teamname}
                    src={`http://176.124.192.232${team.logo}`}
                    width={150}
                />
                <Typography className="text-3xl">
                    {team.teamname} | {division} of {conference}
                </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', gap: '100px', padding: '10px'}}>
                <Tabs value={tab} onChange={handleTabChange}>
                    <Tab label="Roster" sx={{ fontSize: 16 }}/>
                    <Tab label="Matchup" sx={{ fontSize: 16 }}/>
                    <Tab label="Lineup" sx={{ fontSize: 16 }}/>
                </Tabs>
                <FormControl className="w-[15%]">
                    <InputLabel id="season-select-label" sx={{ fontSize: 20, marginTop: -2 }}>Season</InputLabel>
                    <Select
                        labelId="season-select-label"
                        id="season-select"
                        value={currentSeason}
                        onChange={(e) => setCurrentSeason(e.target.value)}
                        sx={{ fontSize: 20 }}
                    >
                        {seasons?.map(season => (
                            <MenuItem value={season.seasonid} key={season.seasonid} sx={{ fontSize: 20 }}>
                                {season.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{paddingX: 7,  fontSize: 20 }}
                    onClick={() => getData(currentSeason)}
                >
                    Search
                </Button>
            </Box>
            {teamInfo &&
                <Box marginY={5}>
                    <TabPanel value={tab} index={0} id="roster">
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ border: 1 }}>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">No.</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Name</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Position</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">DateOfBirth</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">SchirtNumber</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Experience</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Salary</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {teamInfo.roster && teamInfo.roster.map(player => (
                                        <TableRow
                                            key={player.playerid}
                                            sx={{ border: 1 }}
                                        >
                                            <TableCell align="left" sx={{ border: 1 }}>{player.playerid}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }}>{player.playerName}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }}>{player.positionAbbr}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }}>{formatDate(player.dateofbirth)}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }}>{player.shirtnumber}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }}>{player.experience}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }}>{player.salary}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value={tab} index={1} id="matchups">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ border: 1 }}>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Date</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Matchup Type</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Opponent</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Start Time</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Result</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Location</TableCell>
                                        <TableCell align="left" sx={{ border: 1 }} className="bg-gray-200">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {teamInfo.matchups && teamInfo.matchups.map((matchup) => (
                                        <TableRow
                                            key={matchup.matchupId}
                                            sx={{ border: 1 }}
                                        >
                                            <TableCell align="left" sx={{ border: 1 }} >{formatDate(matchup.startTime)}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }} >{matchup.matchupType}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }} >{matchup.opponent}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }} >{formatTime(matchup.startTime)}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }} >{matchup.score}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }} >{matchup.location}</TableCell>
                                            <TableCell align="left" sx={{ border: 1 }} >{matchup.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value={tab} index={2} id="lineup">
                        <Box
                            className="bg-center bg-no-repeat bg-contain h-[900px] w-[80%] mx-auto text-center text-white font-[calibri] text-xl relative"
                            style={{ backgroundImage: `url(${lineupImage})` }}
                        >
                            <Box className="bg-nba-blue border-solid rounded-lg w-[20%] p-[1%] absolute top-[31%] left-[47%]">
                                {getPlayersByPosition("C").map(player => (
                                    <Typography key={player.playerId}>{player.playerName}</Typography>
                                ))}
                            </Box>
                            <Box className="bg-nba-blue border-solid rounded-lg w-[20%] p-[1%] absolute top-[26%] left-[18%]">
                                {getPlayersByPosition("PF").map(player => (
                                    <Typography key={player.playerId}>{player.playerName}</Typography>
                                ))}
                            </Box>
                            <Box className="bg-nba-blue border-solid rounded-lg w-[20%] p-[1%] absolute top-[63%] left-[9%]">
                                {getPlayersByPosition("SG").map(player => (
                                    <Typography key={player.playerId}>{player.playerName}</Typography>
                                ))}
                            </Box>
                            <Box className="bg-nba-blue border-solid rounded-lg w-[20%] p-[1%] absolute top-[53%] left-[66%]">
                                {getPlayersByPosition("SF").map(player => (
                                    <Typography key={player.playerId}>{player.playerName}</Typography>
                                ))}
                            </Box>
                            <Box className="bg-nba-blue border-solid rounded-lg w-[20%] p-[1%] absolute top-[84%] left-[40%]">
                                {getPlayersByPosition("PG").map(player => (
                                    <Typography key={player.playerId}>{player.playerName}</Typography>
                                ))}
                            </Box>
                        </Box>
                    </TabPanel>
                </Box>
            }
        </Box>
    );
};

export default TeamDetail;