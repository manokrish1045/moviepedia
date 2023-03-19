import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';





export function Movie({ movie }) {
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red"
    };
    const [show, setshow] = useState(true);
    return (
        < Card className='movie-container'>
            <img src={movie.poster} alt='' className='movie-poster' />
            < CardContent>
                <div className='movie-specs'>
                    <h3 className='movie-name'>{movie.name}
                        <IconButton aria-label="delete" onClick={() => setshow(!show)}>
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                        {/* // conditional rendering */}
                    </h3>


                    <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
                </div>
                {show ? <p className='movie-summary'>{movie.summary}</p> : null}
            </CardContent>
            <CardActions>
                <Counter />
            </CardActions>

        </ Card>);
}
