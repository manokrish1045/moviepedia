import './App.css';
import { useState } from 'react';

function App() {
  // const names = ["Mano", "Vijay", "Virat", "Sharuk"]
  const users = [
    {
      name: 'Mano',
      pic: "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
    },
    {
      name: 'vijay',
      pic: "https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"
    },
    {
      name: 'virat',
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAoDwXfflPgO00fa31FNaW4BKAKA9uSB8Zw&usqp=CAU"
    }
  ]
  // const name = "Mano"
  return (
    <div className="App">
      {/* <h1>Hello {name}</h1>
      <label htmlFor='username'>name : </label>
      <input id="username" placeholder='enter name' /> */}

      {/* <Msg name='Mano' pic="https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg" />
      <Msg name='vijay' pic="https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" />
      <Msg name='virat' pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAoDwXfflPgO00fa31FNaW4BKAKA9uSB8Zw&usqp=CAU" /> */}
      {/* {names.map((nm => <Welcome name={nm} />))} */}
      {users.map((usr) => (
        <Msg
          name={usr.name}
          pic={usr.pic} />
      ))}

    </div>
  );
}

function Counter() {
  const [like, setlike] = useState(0)
  const [dislike, setdislike] = useState(0)

  return (
    <div>
      <button onClick={() => setlike(like + 1)}>👍{like}</button>
      <button onClick={() => setdislike(dislike + 1)}>👎{dislike}</button>

    </div>
  )


}
function Msg({ pic, name }) {
  // const name = "Mano"
  return (
    <div className='user-container'>
      <img className='profile-pic'
        src={pic} alt={name}></img>
      <h1>Hello {name}</h1>
      <Counter />
    </div>
  )
}

function Welcome({ name }) {
  // const { name, pic } = props // object destructuring

  return (
    <div>
      {/* <img className='profile-pic'
        src={pic} alt='mano'></img> */}

      {/* <h1>Hello {name}</h1> */}
    </div>
  )
}
export default App;
