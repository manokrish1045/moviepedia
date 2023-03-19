import { Counter } from "./Counter";

export function Msg({ pic, name }) {
    // const name = "Mano"
    return (
        <div className='user-container'>
            <img className='profile-pic'
                src={pic} alt={name}></img>
            <h1>Hello {name}</h1>
            <Counter />
        </div>
    );
}
