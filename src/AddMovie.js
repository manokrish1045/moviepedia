import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from './global'

const movieValidationschema = yup.object({
    name: yup
        .string()
        .required("Need a Bigger "),

    poster: yup
        .string()
        .required("Its A Required field"),

    rating: yup
        .number()
        .min(1, "must be atleast 1")
        .max(10)
        .required("Its A Required field"),


    summary: yup
        .string()
        .min(10, "Minimum 10 sentence")
        .required("Its A Required field")
        .max(350),

    trailer: yup
        .string()
        .min(8, "Need a Bettter url")
        .required("Its A Required field 1"),


})
export function AddMovie() {
    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("")
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
        useFormik({
            initialValues: {
                name: "",
                poster: "",
                rating: "",
                summary: "",
                trailer: "1",
            },
            validationSchema: movieValidationschema,

            onSubmit: (newMovie) => {
                console.log("The form is valid", newMovie)
                addMovie(newMovie)
            },


        })


    const navigate = useNavigate();
    const addMovie = (newMovie) => {

        console.log(newMovie);
        // setMovielist([...movieList, newMovie]);
        fetch(`${API}/movies`, {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => navigate('/movies'))
    };
    return (
        <form className='add-movie' onSubmit={handleSubmit}>

            <TextField
                name='name'
                label="Name"
                variant="outlined"
                value={values.name}
                // onChange={(event) => setName(event.target.value)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}

            />



            <TextField label="Poster" variant="outlined"
                name='poster'
                // onChange={(event) => setPoster(event.target.value)}
                value={values.poster}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.poster && errors.poster}
                helperText={touched.poster && errors.poster ? errors.poster : null}

            />



            <TextField
                name='rating'
                label="Rating" variant="outlined"

                // onChange={(event) => setRating(event.target.value)}
                value={values.rating}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.rating && errors.rating}
                helperText={touched.rating && errors.rating ? errors.rating : null}

            />




            <TextField
                name='summary'
                label="Summary" variant="outlined"
                value={values.summary}
                // onChange={(event) => setSummary(event.target.value)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.summary && errors.summary}
                helperText={touched.summary && errors.summary ? errors.summary : null}


            />


            <TextField

                label="Trailer"
                variant="outlined"
                name='trailer'
                value={values.trailer}
                // onChange={(event) => setTrailer(event.target.value)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.trailer && errors.trailer}
                helperText={touched.trailer && errors.trailer ? errors.trailer : null}

            />




            <Button type="submit" variant="contained">Add Movie</Button>

        </form>
    );
}
