import './App.css';
import { useState } from 'react';
import { Msg } from "./Msg"
import { Welcome } from './Welcome';
import { Addcolor } from './Addcolor';
import { MovieList } from './MovieList';
import { Initial_Movie_list } from './Initial_Movie_list';
import { Routes, Route, Link, navigate, useNavigate } from "react-router-dom";
import { AddMovie } from './AddMovie'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';







function App() {
  // const names = ["Mano", "Vijay", "Virat", "Sharuk"]

  // const users = [
  //   {
  //     name: 'Mano',
  //     pic: "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
  //   },
  //   {
  //     name: 'vijay',
  //     pic: "https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"
  //   },
  //   {
  //     name: 'virat',
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAoDwXfflPgO00fa31FNaW4BKAKA9uSB8Zw&usqp=CAU"
  //   }
  // ]
  // const name = "Mano"
  const [movieList, setMovielist] = useState(Initial_Movie_list)

  const [mode, setMode] = useState('dark')
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate()

  fetch('https://6373a80e348e94729912c6b9.mockapi.io/movies')
    .then(data => data.json())
    .then((mvs) => console.log(mvs))
  return (
    <ThemeProvider theme={themeCtx}>
      <Paper sx={{
        minHeight: "100vh",
        borderRadius: "0px",
      }} elevation={5}>
        <div className="App">
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

          {/* <h1>Hello {name}</h1>
      <label htmlFor='username'>name : </label>
      <input id="username" placeholder='enter name' /> */}

          {/* <Msg name='Mano' pic="https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg" />
      <Msg name='vijay' pic="https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" />
      <Msg name='virat' pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAoDwXfflPgO00fa31FNaW4BKAKA9uSB8Zw&usqp=CAU" /> */}
          {/* {names.map((nm => <Welcome name={nm} />))} */}
          {/* {users.map((usr) => (
        <Msg
          name={usr.name}
          pic={usr.pic} />
      ))} */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={
              <MovieList movieList={movieList} setMovielist={setMovielist} />} />
            <Route path='/color' element={<Addcolor />}></Route>
            <Route path='*' element={<Notfound />} />
            <Route path='/movies/add'
              element={<AddMovie movieList={movieList} setMovielist={setMovielist} />}></Route>
          </Routes>


        </div>
      </Paper>
    </ThemeProvider>
  );
}
function Notfound() {
  return (
    <div >
      <h2>Not Found</h2>
      <img className='not-found' src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000' alt='not found' />
    </div>
  )
}
function Home() {
  return (
    <div className='home-welcome'>
      <h1 className='welcome'>Welcome to the app</h1>
      <img className='movie-home' src='https://as1.ftcdn.net/v2/jpg/02/21/90/10/500_F_221901015_HcIHlto5BGdY9BjojnU7HKuIao38h8lp.jpg' alt='movie' />
    </div>

  )
}
export default App;
