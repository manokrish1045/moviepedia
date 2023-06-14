import './App.css';
import { useState } from 'react';
import { Msg } from "./Msg"
import { Welcome } from './Welcome';
import { Addcolor } from './Addcolor';
import { MovieList } from './MovieList';
import { Initial_Movie_list } from './Initial_Movie_list';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
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
import { useEffect } from 'react';
import { MovieDetail } from './MovieDetail';
import { Notfound } from './Notfound';
import { Home } from './Home';
import { BasicForm } from './BasicForm';
import { EditMovie } from './EditMovie';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';






function App() {
  // const names = ["Mano", "Vijay", "Virat", "Sharuk"]
  const { user } = useSelector((state) => state.auth)

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
  const [movieList, setMovielist] = useState([])

  const [mode, setMode] = useState('dark')
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate()

  useEffect(() => {
    fetch('${API}')
      .then((data) => data.json())
      .then((mvs) => setMovielist(mvs))
  }, [])

  return (
    <ThemeProvider theme={themeCtx}>
      <Paper sx={{
        minHeight: "100vh",
        borderRadius: "0px",
      }} elevation={5}>
        <div className="App">


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
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />

            {/* <Route path="/" element={<Home />} /> */}
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route path="/films" element={<navigate replace to='/movies' />} />
            <Route path="/movies" element={<MovieList />} />

            <Route path='/color' element={<Addcolor />}></Route>
            <Route path='*' element={<Notfound />} />
            <Route path='/movies/add' element={<AddMovie />}></Route>
            <Route path='/basic-form' element={<BasicForm />}></Route>

            <Route path='/movies/:id' element={<MovieDetail />}></Route>
            <Route path='/movies/edit/:id' element={<EditMovie />}></Route>

          </Routes>


        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
