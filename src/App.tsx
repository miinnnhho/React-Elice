import React, { useState } from 'react';
import './App.css';
import { Button, Container } from '@mui/material';

// @ts-ignore
function Counter({ title, initValue }) {
    const [count, setCount] = useState(0);
    {
        /* css inline 방식  */
    }
    return (
        <div
            style={{
                border: '1px solid black',
                fontSize: 10,
            }}
        >
            <h1>{title}</h1>
            <Button variant="contained"
                className="btn"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </Button>{' '}
            {count}
        </div>
    );
}

function App() {
    return (
        <Container maxWidth="md">
            <Counter title="카운터" initValue={0} />
            <Counter title="카운터" initValue={0} />
        </Container>
    );
}

export default App;
