import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const MatchupDetail = ({ setHeaderTitle }) => {
    const {matchupId} = useParams();

    useEffect(() => {
        const headerTitle = "Matchup List";
        setHeaderTitle(headerTitle);
        document.title = headerTitle;
    }, [])

    return (
        <Box>
            <Typography textAlign="center" mt={50} fontSize={40}>
                Matchup Detail about match with id {matchupId}
            </Typography>
        </Box>
    )
}

export default MatchupDetail