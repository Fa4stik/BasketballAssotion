import { useEffect, useState } from "react"
import InputNba from "./InputNba"
import { teamApi } from "../api/teamApi";
import { Typography } from "@mui/material";


const AddANewMatchupForRegularSeason = ({ setHeaderTitle }) => {
    const [teams, setTeams] = useState([]);
    const [form, setForm] = useState({
        date: '',
        time: '',
        location: '',
        team_away: '',
        team_home: ''
    })

    useEffect(() => {
        teamApi.getTeamNames()
            .then(response => setTeams(response.data))
        const headerTitle = "Add a new matchup for regular season";
        setHeaderTitle(headerTitle);
        document.title = headerTitle;
    }, [])


    const handleChange = ({ target }) => {
        if (target.name === 'date') {
            setForm({ ...form, date: target.value })
        } else if (target.name === 'time') {
            setForm({ ...form, time: target.value })
        } else if (target.name === 'location') {
            setForm({ ...form, location: target.value })
        } else if (target.name === 'team_away') {
            setForm({ ...form, team_away: target.value })
        } else {
            setForm({ ...form, team_home: target.value })
        }
    }

    const handleSumbitForm = (e) => {
        e.preventDefault();

        //send form on back
    }

    return (
        <>
            <div className="border-nba-border border-2 border-solid flex justify-center py-[20px]">
                <div className="flex flex-col items-center max-w-screen-lg w-full opacity-80">
                    <div className="flex justify-between w-full pb-[40px] " >
                        <Typography className='text-[34px]'>
                            Season: 2016-2017
                        </Typography>
                        <Typography className='text-[34px]'>
                            Matchup Type: Regular Season
                        </Typography>
                    </div>
                    <div className="flex justify-between w-full pb-[40px]">
                        <div className="date flex items-center">
                            <Typography className='text-[34px]'>
                                Date
                            </Typography>
                            <InputNba
                                type='date'
                                name='date'
                                height='50'
                                width='330'
                                value={form.date}
                                handleChange={handleChange} />
                        </div>
                        <div className="time flex items-center">
                            <Typography className='text-[34px]'>
                                Time:
                            </Typography>
                            <InputNba
                                type='time'
                                name='time'
                                height='50'
                                width='200'
                                value={form.time}
                                handleChange={handleChange} />
                        </div>
                    </div>
                    <div className="location w-full pb-[40px] flex justify-between items-center">
                        <Typography className='text-[34px]'>
                            Location:
                        </Typography>
                        <InputNba
                            type='text'
                            name='location'
                            height='50'
                            width='760'
                            value={form.location}
                            handleChange={handleChange} />
                    </div>
                    <div className="flex justify-between w-full items-end">
                        <div className="team__away">
                            <Typography className='text-[34px] font-semibold mb-[14px]'>
                                Team(Away):
                            </Typography>
                            <InputNba
                                type='select'
                                name='team_away'
                                height='60'
                                width='350'
                                options={teams}
                                value={form.team_away}
                                handleChange={handleChange} />
                        </div>
                        <Typography className='text-[50px] font-semibold'>
                            VS
                        </Typography>
                        <div className="team__home ">
                            <Typography className='text-[34px] font-semibold mb-[14px]'>
                                Team(Home):
                            </Typography>
                            <InputNba
                                type='select'
                                name='team_home'
                                height='60'
                                width='350'
                                options={teams}
                                value={form.team_home}
                                handleChange={handleChange} 
                                />
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-[140px] h-[45px] text-[28px] bg-transparent ml-auto mr-auto mt-[30px] border-1 rounded-[8px] cursor-pointer hover:opacity-80 border"
                type="submit"
                onClick={handleSumbitForm}>
                Submit
            </button>
        </>
    )
}

export default AddANewMatchupForRegularSeason