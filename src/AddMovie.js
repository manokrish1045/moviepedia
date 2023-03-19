import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovielist }) {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
        };
        console.log(newMovie);
        setMovielist([...movieList, newMovie]);
    };
    return (
        <div className='add-movie'>

            <TextField label="Name" variant="outlined"
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text" placeholder='Name' />


            <TextField label="Poster" variant="outlined"
                placeholder='Poster'
                onChange={(event) => setPoster(event.target.value)}
                value={poster} />


            <TextField label="Rating" variant="outlined"
                type="text" placeholder='Rating'
                onChange={(event) => setRating(event.target.value)}
                value={rating} />


            <TextField label="Summary" variant="outlined"
                type="text" placeholder='Summary'
                onChange={(event) => setSummary(event.target.value)}
                value={summary} />

            <p>
                {name}
                {rating}
            </p>
            <Button variant="contained" onClick={addMovie}>Add Movie</Button>

        </div>
    );
}
