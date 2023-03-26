import { Movie } from './Movie';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from './global';

export function MovieList() {
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
        <div>

            <div className='movie-list'>
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
    );
}


