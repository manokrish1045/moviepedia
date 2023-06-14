import * as React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export function Home() {
    const [mode, setMode] = useState('light')
    const themeCtx = createTheme({
        palette: {
            mode: mode,
        },
    });
    const navigate = useNavigate()
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./login";
    };
    return (

        < div className='home-welcome' >
            <ThemeProvider theme={themeCtx}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                        <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
                        <Button color="inherit" onClick={() => navigate("/movies/add")}>Add Movie</Button>
                        <Button color="inherit" onClick={() => navigate("/color")}>Color</Button>
                        <Button color="inherit" onClick={logOut}>Logout</Button>

                        <Button sx={{
                            marginLeft: 'auto'
                        }}
                            startIcon={mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                            color='inherit' onClick={() => setMode(mode === "dark" ? 'light' : 'dark')}>{mode === 'light' ? 'dark' : 'light'}Mode</Button>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <h1 className='welcome'>Welcome to the app</h1>
            <img className='movie-home' src='https://as1.ftcdn.net/v2/jpg/02/21/90/10/500_F_221901015_HcIHlto5BGdY9BjojnU7HKuIao38h8lp.jpg' alt='movie' />
        </div >

    );
}
