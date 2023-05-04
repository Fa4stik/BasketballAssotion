import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { playersApi } from "../api/playersApi";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import { teamApi } from "../api/teamApi";

const columns = [
    { field: 'photo', headerName: 'Photo', width: 200 },
    { field: 'shirtnumber', headerName: 'No', width: 50 },
    { field: 'playerName', headerName: 'Name', width: 200 },
    { field: 'teamName', headerName: 'Team', width: 200 },
    { field: 'position', headerName: 'Position', width: 50 },
    { field: 'weight', headerName: 'Weight', width: 50 },
    { field: 'height', headerName: 'Height', width: 50 },
    { field: 'experience', headerName: 'Expirience', width: 80 },
    { field: 'country', headerName: 'Country', width: 200 }
];

const PlayesMain = () => {
    const [rows, setRows] = useState([])
    const [season, setSeason] = useState(3)
    const [team, setTeam] = useState('')
    const [player, setPlayer] = useState('')
    const [teams, setTeams] = useState([])
    const [players, setPlayers] = useState([])
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const addId = (arr) => {
        return arr.map(el => Object.assign({}, el, { id: el.playerId }));
    }

    const getNames = (arr) => {
        return arr.map(el => ({ playerName: el.playerName, playerId: el.playerId }))
    }

    useEffect(() => {
        playersApi.getPlayersBySeason()
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setPlayers(getNames(data))
                setRows(addId(data))
            })

        teamApi.getTeamNames()
            .then(response => setTeams(response.data))
    }, [])

    const handleSelectLetter = (letter) => {
        playersApi.getPlayersByLetter(letter)
            .then(response => response.data)
            .then(data => setRows(addId(data)))
    }

    const handleChangeSeason = (e) => {
        setSeason(e.target.value)

        playersApi.getPlayersBySeason(e.target.value)
            .then(response => response.data)
            .then(data => setRows(addId(data)))
    }

    const handleChangePlayer = (e) => {
        setPlayer(e.target.value)

        playersApi.getPlayersByPlayer(e.target)
            .then(response => response.data)
            .then(data => setRows(addId(data)))
    }

    const handleChangeTeam = (e) => {
        setTeam(e.target.value)

        playersApi.getPlayersByTeam(e.target.value)
            .then(response => response.data)
            .then(data => setRows(addId(data)))
    }

    if (rows.length > 0) {
        return (
            <>
                <div className="sort">
                    <div className="flex justify-start flex-wrap mt-[15px]">
                        {ABC.map(el => <Button onClick={() => handleSelectLetter(el)}>{el}</Button>)}
                    </div>
                    <div className="flex justify-start flex-wrap items-center mt-[15px]">
                        <Typography sx={{
                            mr: '10px'
                        }}>
                            Season
                        </Typography>

                        <Select
                            value={season}
                            onChange={(e) => handleChangeSeason(e)}
                            sx={{
                                width: '140px',
                                mr: '20px'
                            }}>
                            <MenuItem value={1}>2014-2015</MenuItem>
                            <MenuItem value={2}>2015-2016</MenuItem>
                            <MenuItem value={3}>2016-2017</MenuItem>
                        </Select>

                        <Typography sx={{
                            mr: '10px'
                        }}>
                            Team
                        </Typography>

                        <Select
                            value={team}
                            onChange={(e) => handleChangeTeam(e)}
                            sx={{
                                width: '240px',
                                mr: '20px'
                            }}>
                            {teams.map(el => (
                                <MenuItem value={el.teamId}>{el.teamName}</MenuItem>
                            ))}
                        </Select>

                        <Typography sx={{
                            mr: '10px'
                        }}>
                            Playername
                        </Typography>

                        <Select
                            onChange={(e) => handleChangePlayer(e)}
                            value={player}
                            sx={{
                                width: '240px',
                                mr: '20px'
                            }}>
                            {players.map(el => (
                                <MenuItem value={el.playerId}>
                                    {el.playerName}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>
                <DataGrid
                    className="mt-[15px]"
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </>
        )
    }
    return (
        <>Hello</>
    )
}

export default PlayesMain