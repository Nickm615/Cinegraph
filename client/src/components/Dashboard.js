import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { FilmProvider, useFilmContext } from "../utils/filmContext";
import SearchMovieForm from "./SearchMovieForm";
import RenderScatterChart from "./MovieChart";
export default function Dashboard() {
const  initialState  = useFilmContext();
// const [filmState, setFilmState] = useState({...initialState})
// const { initialState } = FilmProvider

    return (
    
        <Box>
            {/*Breaks on refresh */}
            {console.log(initialState)}
            <Typography variant='h2'>
                dashboard
            </Typography>
            <RenderScatterChart/>
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