import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import { useEffect } from 'react';
import { API } from './global'

export function MovieDetail() {
    const { id } = useParams();
    console.log(useParams());

    const [movie, setMovie] = useState({});
    const getMovie = () => {

        fetch(`${API}/movies/${id}`, {
            method: 'GET',
        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    };
    useEffect(() => getMovie());
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red"
    };
    const navigate = useNavigate();
    return (
        <div className='info'>
            <iframe
                width="100%"
                height="538"
                src={movie.trailer}
                title="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
            <div className='movie-detail'>
                <div className='movie-specs'>
                    <h3 className='movie-name'>
                        {movie.name}
                        {/* // conditional rendering */}
                    </h3>
                    <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
                    <p className='movie-summary'>{movie.summary}</p>
                    <button onClick={() => navigate(-1)}> Back</button>
                </div>
            </div>
        </div>
    );
}
