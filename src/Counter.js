import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export function Counter() {
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);

    return (
        <div>
            <IconButton color="primary" onClick={() => setlike(like + 1)}>
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>

            </IconButton>
            <IconButton color="error" onClick={() => setdislike(dislike + 1)}>
                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>

            </IconButton>


        </div>
    );


}
