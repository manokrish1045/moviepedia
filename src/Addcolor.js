import { useState } from 'react';
import { Colorbox } from './Colorbox';

export function Addcolor() {
    const [color, setcolor] = useState("pink");

    const styles = {
        background: color,
    };
    return (
        <div>
            <input style={styles} type="text"
                onChange={(event) => setcolor(event.target.value)}
                value={color}
            ></input>
            <button> Add color</button>
            <Colorbox clr="red" />
            <Colorbox clr="blue" />
        </div>
    );
}
