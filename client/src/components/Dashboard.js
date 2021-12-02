import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { useFilmContext } from "../utils/filmContext";
import SearchMovieForm from "./SearchMovieForm";

export default function Dashboard() {
    return (
        <Box>
            <Typography variant='h3'>
                dashboard
            </Typography>
            <Typography variant='body1' gutterbottom>
                can only access this page if logged in
            </Typography>
            <Typography variant='body1' gutterbottom>
                chart displayed on this page with form to add/remove movies
            </Typography>
            <SearchMovieForm/>
        </Box>
    )
}