import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import {
    Button,
    Box,
    Typography,
    Tab,
    Tabs,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Table,
    TableContainer,
    TablePagination,
    LinearProgress,
    CircularProgress,
    FormControl,
    Select,
    MenuItem
} from '@mui/material';
import { matchupsDetailApi } from '../api/matchupDetail.api';
import { matchupUtils } from '../utils/matchup';
import { tableUtils } from '../utils/table';
import EnhancedTableHead from './EnhancedTableHead'
import TabPanel from "./TabPanel"
import basketballCourtImage from "../assets/webp/basketballCourt.webp"

const MatchupDetail = ({ setHeaderTitle }) => {
    const { matchupId } = useParams();
    const searchParams = new URLSearchParams(useLocation().search);
    const matchup = JSON.parse(decodeURIComponent(searchParams.get('matchup')));

    const [tab, setTab] = useState(2);

    const [currentQuarter, setCurrentQuarter] = useState(1)
    const [matchupDetailTeamStatus, setMatchupDetailTeamStatus] = useState(null);
    const [matchupDetail, setMatchupDetail] = useState(null);
    const [matchupLog, setMatchupLog] = useState(null);
    const [awayTeamRoster, setAwayTeamRoster] = useState(null);
    const [homeTeamRoster, setHomeTeamRoster] = useState(null);
    const [awayTeamScores, setAwayTeamScores] = useState(null);
    const [homeTeamScores, setHomeTeamScores] = useState(null);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const logHeadCells = [
        {
            id: 'occurTime',
            label: 'OccurTime',
            numeric: false,
        },
        {
            id: 'team',
            label: 'Team',
            numeric: false,
        },
        {
            id: 'player',
            label: 'Player',
            numeric: false,
        },
        {
            id: 'actionType',
            label: 'ActionType',
            numeric: false,
        },
        {
            id: 'remark',
            label: 'Remark',
            numeric: false,
        },
    ];

    const scoresHeadCells = [
        {
            id: '',
            label: '',
        },
        {
            id: 'total',
            label: 'T',
        },
        {
            id: 'firstQuarter',
            label: '1st',
        },
        {
            id: 'secondQuarter',
            label: '2nd',
        },
        {
            id: 'thirdQuarter',
            label: '3rd',
        },
        {
            id: 'fourthQuarter',
            label: '4th',
        },
    ];

    const getData = async () => {
        const matchupDetail = await matchupsDetailApi.getMatchup(matchupId);
        const matchupDetailTeamStatus = await matchupsDetailApi.getMatchupDetailTeamStatus(matchupId);
        const log = await matchupsDetailApi.getMatchupQuarterLog(matchupId, currentQuarter);
        const rosters = await matchupsDetailApi.getMatchupRosters(matchupId);
        const quarterDetail = await matchupsDetailApi.getQuarterMatchupDetail(matchupId);
        setAwayTeamScores(quarterDetail.awayTeam.scores)
        setHomeTeamScores(quarterDetail.homeTeam.scores)
        setAwayTeamRoster(rosters[0].roster);
        setHomeTeamRoster(rosters[1].roster);
        setMatchupDetail(matchupDetail);
        setMatchupDetailTeamStatus(matchupDetailTeamStatus);
        setMatchupLog(log);
    }

    const handleTabChange = (e, newValue) => {
        setTab(newValue)
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleLogs = useMemo(
        () =>
            matchupLog && tableUtils.stableSort(matchupLog, tableUtils.getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, matchupLog],
    );

    useEffect(() => {
        const headerTitle = "Matchup Detail";
        setHeaderTitle(headerTitle);
        document.title = headerTitle;
        getData();
    }, [])

    const handleQuarterSelect = async () => {
        setMatchupLog(null);
        const log = await matchupsDetailApi.getMatchupQuarterLog(matchupId, currentQuarter);
        setMatchupLog(log);
    }

    return (
        <Box p={5}>
            {(matchupDetailTeamStatus && awayTeamRoster && homeTeamRoster)
                ?
                <>
                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", marginBottom: '3vh' }}>
                        {
                            matchupDetail[0].teamAwayScore > matchupDetail[0].teamHomeScore ?
                                <Typography className="font-bold" fontSize={24}>
                                    {matchup.awayTeam.teamname}
                                </Typography>
                                :
                                <Typography fontSize={24}>
                                    {matchup.awayTeam.teamname}
                                </Typography>
                        }
                        <img
                            alt={matchup.awayTeam.teamname}
                            src={`http://176.124.192.232${matchup.awayTeam.logo}`}
                            width={150}
                        />
                        {
                            matchupDetail[0].teamAwayScore > matchupDetail[0].teamHomeScore ?
                                <Typography className="font-bold" fontSize={30}>
                                    {matchupDetail && matchupDetail[0].teamAwayScore}
                                </Typography>
                                :
                                <Typography fontSize={30}>
                                    {matchupDetail && matchupDetail[0].teamAwayScore}
                                </Typography>
                        }
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '2vh' }}>
                            <Table sx={{ marginTop: '4vh' }}>
                                <TableHead className='bg-gray-200'>
                                    <TableRow sx={{ border: 1 }}>
                                        {scoresHeadCells.map((headCell) => (
                                            <TableCell key={headCell.id} sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                                {headCell.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ border: 1 }}>
                                        <TableCell sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                            {matchupDetailTeamStatus?.item1?.teamAbbr}
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                            {matchupDetail && matchupDetail[0].teamAwayScore}
                                        </TableCell>
                                        {awayTeamScores && awayTeamScores.map((cell) => (
                                            <TableCell key={cell.quarter} sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                                {cell.score}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    <TableRow sx={{ border: 1 }}>
                                        <TableCell sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                            {matchupDetailTeamStatus?.item2?.teamAbbr}
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                            {matchupDetail && matchupDetail[0].teamHomeScore}
                                        </TableCell>
                                        {homeTeamScores && homeTeamScores.map((cell) => (
                                            <TableCell key={cell.quarter} sx={{ border: '1px solid black', padding: '0.5vh 1vw', textAlign: 'center' }}>
                                                {cell.score}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Typography
                                className={`text-white py-2`}
                                sx={{ backgroundColor: `${matchupUtils.setStatus(matchup.status).color}` }}
                                textAlign="center"
                                width={120}
                            >
                                {matchupDetail && matchupUtils.setStatus(matchupDetail[0].status).text}
                            </Typography>
                        </Box>
                        {
                            matchupDetail[0].teamAwayScore < matchupDetail[0].teamHomeScore ?
                                <Typography className="font-bold" fontSize={30}>
                                    {matchupDetail && matchupDetail[0].teamHomeScore}
                                </Typography>
                                :
                                <Typography fontSize={30}>
                                    {matchupDetail && matchupDetail[0].teamHomeScore}
                                </Typography>
                        }
                        <img
                            alt={matchup.homeTeam.teamname}
                            src={`http://176.124.192.232${matchup.homeTeam.logo}`}
                            width={150}
                        />
                        {
                            matchupDetail[0].teamAwayScore < matchupDetail[0].teamHomeScore ?
                                <Typography className="font-bold" fontSize={24}>
                                    {matchup.homeTeam.teamname}
                                </Typography>
                                :
                                <Typography fontSize={24}>
                                    {matchup.homeTeam.teamname}
                                </Typography>
                        }
                    </Box>
                    <Box>
                        <Tabs value={tab} onChange={handleTabChange}>
                            <Tab label="Team Status" sx={{ fontSize: 16 }} />
                            <Tab label="Short Chart" sx={{ fontSize: 16 }} />
                            <Tab label="Log" sx={{ fontSize: 16 }} />
                        </Tabs>
                    </Box>
                    <Box marginY={5}>
                        <TabPanel value={tab} index={0} id="teamStatus">
                            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "flex-start" }}>
                                <Box width='70%'>
                                    <Table>
                                        <TableHead>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'></TableCell>
                                                <TableCell align="center">
                                                    <img
                                                        alt={matchup.awayTeam.teamname}
                                                        src={`http://176.124.192.232${matchup.homeTeam.logo}`}
                                                        width={70}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <img
                                                        alt={matchup.homeTeam.teamname}
                                                        src={`http://176.124.192.232${matchup.awayTeam.logo}`}
                                                        width={70}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    FG Made-Attempted
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.fieldGoals}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.fieldGoals}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    3PT Made-Attempted
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.threePointGoals}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.threePointGoals}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    FT Made-Attempted
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.freeThrowGoals}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.freeThrowGoals}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    Rebounds
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.rebounds}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.rebounds}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    Assits
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.assists}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.assists}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    Steals
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.steals}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.steals}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    Blocks
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.blocks}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.blocks}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ border: 1 }}>
                                                <TableCell align="left" width='50%'>
                                                    Turnovers
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item2.turnovers}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {matchupDetailTeamStatus.item1.turnovers}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>
                                <Box width='25%'>
                                    <Box sx={{ border: '1px solid black', padding: '1vh 2vw', marginBottom: '3vh' }}>
                                        <Typography>
                                            Field Goal %
                                        </Typography>
                                        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", marginTop: '1vh', columnGap: '5px' }}>
                                            <Typography>
                                                {matchupDetailTeamStatus.item2.teamAbbr}
                                            </Typography>
                                            <Box sx={{ width: '60%' }}>
                                                <LinearProgress sx={{ height: '1.5vh' }} variant="determinate" value={matchupDetailTeamStatus.item1.fieldGoalPercent} />
                                            </Box>
                                            <Typography>
                                                {matchupDetailTeamStatus.item2.fieldGoalPercent.toFixed(2)}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", marginTop: '1vh', columnGap: '5px' }}>
                                            <Typography>
                                                {matchupDetailTeamStatus.item1.teamAbbr}
                                            </Typography>
                                            <Box sx={{ width: '60%' }}>
                                                <LinearProgress sx={{ height: '1.5vh' }} variant="determinate" value={matchupDetailTeamStatus.item2.fieldGoalPercent} />
                                            </Box>
                                            <Typography>
                                                {matchupDetailTeamStatus.item1.fieldGoalPercent.toFixed(2)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ border: '1px solid black', padding: '1vh 2vw', marginBottom: '3vh' }}>
                                        <Typography>
                                            Three Point %
                                        </Typography>
                                        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", marginTop: '1vh', columnGap: '5px' }}>
                                            <Typography>
                                                {matchupDetailTeamStatus.item2.teamAbbr}
                                            </Typography>
                                            <Box sx={{ width: '60%' }}>
                                                <LinearProgress sx={{ height: '1.5vh' }} variant="determinate" value={matchupDetailTeamStatus.item2.threePointGoalPercent} />
                                            </Box>
                                            <Typography>
                                                {matchupDetailTeamStatus.item2.threePointGoalPercent.toFixed(2)}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", marginTop: '1vh', columnGap: '5px' }}>
                                            <Typography>
                                                {matchupDetailTeamStatus.item1.teamAbbr}
                                            </Typography>
                                            <Box sx={{ width: '60%' }}>
                                                <LinearProgress sx={{ height: '1.5vh' }} variant="determinate" value={matchupDetailTeamStatus.item1.threePointGoalPercent} />
                                            </Box>
                                            <Typography>
                                                {matchupDetailTeamStatus.item1.threePointGoalPercent.toFixed(2)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={tab} index={1} id="shortChart">
                            <Box
                                className="bg-center bg-no-repeat bg-contain w-[100%] h-[900px] mx-auto text-center font-[calibri] text-xl relative"
                                style={{ backgroundImage: `url(${basketballCourtImage})` }}
                            >
                                <Box className="absolute bg-white border-solid rounded-lg w-[25%] p-[1%] top-[30%] left-[10%]">
                                    <Box sx={{ display: "flex", alignItems: "center", columnGap: "1vw" }}>
                                        <img
                                            alt={matchup.awayTeam.teamname}
                                            src={`http://176.124.192.232${matchup.awayTeam.logo}`}
                                            width={50}
                                        />
                                        <Typography fontSize={24} fontWeight={700}>Starter</Typography>
                                    </Box>
                                    {awayTeamRoster.map((player) => (
                                        <Typography key={player.playerId} sx={{ margin: '1vh 0', padding: '1vh', fontSize: '16px', borderTop: '1px solid black', textAlign: 'start' }}>
                                            {player.playerName} ({player.shirtNumber}#)
                                        </Typography>
                                    ))}
                                </Box>
                                <img
                                    alt={matchup.homeTeam.teamname}
                                    src={`http://176.124.192.232${matchup.homeTeam.logo}`}
                                    width={50}
                                    className="absolute w-[20%] top-[35%] left-[40%]"
                                />
                                <Box className="absolute bg-white border-solid rounded-lg w-[25%] p-[1%] top-[30%] right-[10%]">
                                    <Box sx={{ display: "flex", alignItems: "center", columnGap: "1vw" }}>
                                        <img
                                            alt={matchup.homeTeam.teamname}
                                            src={`http://176.124.192.232${matchup.homeTeam.logo}`}
                                            width={50}
                                        />
                                        <Typography fontSize={24} fontWeight={700}>Starter</Typography>
                                    </Box>
                                    {homeTeamRoster.map((player) => (
                                        <Typography key={player.playerId} sx={{ margin: '1vh 0', padding: '1vh', fontSize: '16px', borderTop: '1px solid black', textAlign: 'start' }}>
                                            {player.playerName} ({player.shirtNumber}#)
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={tab} index={2} id="log">
                            <Box sx={{ display: "flex", alignItems: "center", columnGap: "2vw", marginBottom: "3vh" }}>
                                <Typography sx={{ fontSize: 20 }} >
                                    Quarter:
                                </Typography>
                                <FormControl sx={{ width: "5vw" }}>
                                    <Select
                                        id="quarter-select"
                                        value={currentQuarter}
                                        onChange={(e) => setCurrentQuarter(e.target.value)}
                                        sx={{ fontSize: 14 }}
                                    >
                                        <MenuItem value={1}>
                                            1st
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            2st
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            3st
                                        </MenuItem>
                                        <MenuItem value={4}>
                                            4st
                                        </MenuItem>
                                        {
                                            false // TODO placeholder for overtimes log if exist
                                                ?
                                                <>
                                                    <MenuItem value={5}>
                                                        OT1
                                                    </MenuItem>
                                                    <MenuItem value={6}>
                                                        OT2
                                                    </MenuItem></>
                                                :
                                                <></>
                                        }
                                    </Select>
                                </FormControl>
                                <Button
                                    variant="contained"
                                    sx={{ paddingX: 7, fontSize: 14 }}
                                    onClick={handleQuarterSelect}
                                >
                                    Search
                                </Button>
                            </Box>
                            {
                                matchupLog
                                    ?
                                    <>
                                        <TableContainer>
                                            <Table>
                                                <EnhancedTableHead
                                                    order={order}
                                                    orderBy={orderBy}
                                                    onRequestSort={handleRequestSort}
                                                    rowCount={matchupLog.length}
                                                    headCells={logHeadCells}
                                                />
                                                <TableBody>
                                                    {visibleLogs.map((log) => (
                                                        <TableRow key={log.id}>
                                                            <TableCell sx={{ border: '1px solid rgb(229 231 235);' }} align="center">
                                                                {log.occurtime}
                                                            </TableCell>
                                                            <TableCell sx={{ border: '1px solid rgb(229 231 235);' }} align="center">
                                                                {log.teamAbbr ? log.teamAbbr : "-"}
                                                            </TableCell>
                                                            <TableCell sx={{ border: '1px solid rgb(229 231 235);' }} align="center">
                                                                {log.playerNameShortNumber ? log.playerNameShortNumber : "-"}
                                                            </TableCell>
                                                            <TableCell sx={{ border: '1px solid rgb(229 231 235);' }} align="center">
                                                                {log.actiontype ? log.actiontype : "-"}
                                                            </TableCell>
                                                            <TableCell sx={{ border: '1px solid rgb(229 231 235);' }} align="center">
                                                                {log.remark}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25]}
                                            component="div"
                                            count={matchupLog.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </>
                                    :
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40vh' }}>
                                        <CircularProgress sx={{ margin: 'auto' }} />
                                    </Box>
                            }
                        </TabPanel>
                    </Box>
                </>
                :
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70vh' }}>
                    <CircularProgress sx={{ margin: 'auto' }} />
                </Box>
            }
        </Box>
    )
}

export default MatchupDetail