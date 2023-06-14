import { Movie } from './Movie';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from './global';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export function MovieList() {

    const [mode, setMode] = useState('dark')
    const themeCtx = createTheme({
        palette: {
            mode: mode,
        },
    });
    // const navigate = useNavigate()
    // const logOut = () => {
    //     window.localStorage.clear();
    //     window.location.href = "./login";
    // };
    const [movieList, setMovielist] = useState([])

    const getMovies = () => {
        fetch(`${API}/movies`, {

        })
            .then((data) => data.json())
            .then((mvs) => setMovielist(mvs))
    }
    useEffect(() => getMovies(), [])
    const DeleteMovie = (id) => {
        fetch(`${API}/movies/${id}`, {
            method: "DELETE"
        }).then(() => getMovies())
    }
    const navigate = useNavigate()
    return (
        <ThemeProvider theme={themeCtx}>

            <div>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                            <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
                            <Button color="inherit" onClick={() => navigate("/movies/add")}>Add Movie</Button>
                            <Button color="inherit" onClick={() => navigate("/color")}>Color</Button>

                            <Button sx={{
                                marginLeft: 'auto'
                            }}
                                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                color='inherit' onClick={() => setMode(mode === "light" ? 'dark' : 'light')}>{mode === 'light' ? 'dark' : 'light'}Mode</Button>

                        </Toolbar>
                    </AppBar>
                </div>

                <div className='movie-list' theme={themeCtx}>
                    {movieList.map((mv) => (
                        <Movie
                            movie={mv}
                            deleteButton={
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => DeleteMovie(mv.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                            editButton={
                                <IconButton
                                    aria-label="edit"
                                    onClick={() => navigate(`/movies/edit/${mv.id}`)}
                                >
                                    <EditIcon />
                                </IconButton>
                            }
                        />
                    ))}

                </div>
            </div>
        </ThemeProvider>

    );
}


