import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {
    Box, Button, TextField, Typography, Divider
} from "@mui/material"
import { matchupUtils } from '../utils/matchup'
import { matchupsApi } from '../api/matchups.api'
import { formatDate } from '../utils/date'

const MatchupList = ({ setHeaderTitle }) => {
    const [currentDate, setCurrentDate] = useState(new Date('2016-09-10').toISOString().split('T')[0])
    const [matchups, setMatchups] = useState([])
    const [upcomingMatchup, setUpcomingMatchup] = useState()

    const getMatchups = async () => {
        try {
            const data = await matchupsApi.getMatchups(currentDate)
            data.sort(compareByStartTime)
            setMatchups(data)
            const upcomingMatchupData = data.find(matchup => matchup.status === -1)
            upcomingMatchupData ? setUpcomingMatchup(upcomingMatchupData) : setUpcomingMatchup(data[data.length - 1])
        } catch (error) {
            console.log(error.message)
        }
    }

    const compareByStartTime = (matchA, matchB) => {
        const startTimeA = new Date(matchA.startTime);
        const startTimeB = new Date(matchB.startTime);
        return startTimeA - startTimeB;
    };

    useEffect(() => {
        getMatchups()
        const headerTitle = "Matchup List";
        setHeaderTitle(headerTitle);
        document.title = headerTitle;
    }, [currentDate])

    return (
        <Box sx={{ width: "100%", height: "100%" }} paddingY={5}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                    onClick={() => {
                        const newDate = new Date(currentDate);
                        newDate.setDate(newDate.getDate() - 1);
                        const prevDay = newDate.toISOString().split('T')[0];
                        setCurrentDate(prevDay);
                    }}
                >◀</Button>
                <TextField
                    id="date"
                    type="date"
                    value={currentDate}
                    onChange={e => setCurrentDate(e.target.value)}
                />
                <Button
                    onClick={() => {
                        const newDate = new Date(currentDate);
                        newDate.setDate(newDate.getDate() + 1);
                        const prevDay = newDate.toISOString().split('T')[0];
                        setCurrentDate(prevDay);
                    }}
                >▶</Button>
            </Box>
            {
                matchups.length ? (
                    <>
                        <Box className='flex justify-center items-center my-24 ml-[10%]'>
                            <img
                                alt={upcomingMatchup.awayTeam.teamname}
                                src={`http://176.124.192.232${upcomingMatchup.awayTeam.logo}`}
                                width={150}
                            />
                            <Typography className='text-nba-blue text-2xl ml-[2%]' width={200}>
                                {upcomingMatchup.awayTeam.teamname}<br />(Away)
                            </Typography>
                            <Box className='flex-col items-center gap-20 mr-[8%]'>
                                <Typography textAlign="center" className='text-2xl'>
                                    VS
                                </Typography>
                                <Typography textAlign="center" className='text-2xl mt-[5%]'>
                                    {formatDate(upcomingMatchup.startTime)} Start
                                </Typography>
                            </Box>
                            <img
                                alt={upcomingMatchup.homeTeam.teamname}
                                src={`http://176.124.192.232${upcomingMatchup.homeTeam.logo}`}
                                width={150}
                            />
                            <Typography className='text-nba-blue text-2xl ml-[2%]' width={200}>
                                {upcomingMatchup.homeTeam.teamname}<br />(Home)
                            </Typography>
                        </Box>
                        <Divider />
                        <Box>
                            {matchups.map(matchup => (
                                <Box component={"div"} key={matchup.matchupId}>
                                    <Box className='flex justify-between items-center h-28 py-12' >
                                        <Typography
                                            className={`text-white py-2`}
                                            sx={{ backgroundColor: `${matchupUtils.setStatus(matchup.status).color}` }}
                                            textAlign="center"
                                            width={120}
                                        >
                                            {matchupUtils.setStatus(matchup.status).text}
                                        </Typography>
                                        <Typography
                                            textAlign="center"
                                            width={120}
                                        >
                                            {`${matchup.startTime.slice(8, 10)}/`}
                                            {`${matchup.startTime.slice(5, 7)} `}
                                            {`${matchup.startTime.slice(11, 16)} `}
                                        </Typography>
                                        <img
                                            alt={matchup.awayTeam.teamname}
                                            src={`http://176.124.192.232${matchup.awayTeam.logo}`}
                                            width={80}
                                        />
                                        <Typography className='text-nba-blue text-lg' textAlign="center" width={100}>
                                            {matchup.awayTeam.teamname}
                                        </Typography>
                                        <Typography className=' text-lg' textAlign="center" width={100}>
                                            {matchup.result ? matchup.result : "-"}
                                        </Typography>
                                        <img
                                            alt="Away Team"
                                            src={`http://176.124.192.232${matchup.homeTeam.logo}`}
                                            width={80}
                                        />
                                        <Typography className='text-nba-blue text-lg' textAlign="center" width={100}>{matchup.homeTeam.teamname}</Typography>
                                        <Typography className=' text-lg w-36' textAlign="center" width={100}>
                                            {matchup.location ? matchup.location : "Location"}
                                        </Typography>
                                        <Link to={{
                                            pathname: `/visitor/matchups/${matchup.matchupId}`,
                                            search: `?matchup=${encodeURIComponent(JSON.stringify(matchup))}`
                                        }}>
                                            <Button variant="contained" sx={{ width: 40 }}>
                                                View
                                            </Button>
                                        </Link>
                                    </Box>
                                    <Divider />
                                </Box>
                            ))}
                        </Box>
                    </>
                ) : (
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{ display: "flex", justifyContent: "center" }}
                        mt={20}
                    >
                        No matches found on that day...
                    </Typography>
                )
            }
        </Box>
    )
}

export default MatchupList