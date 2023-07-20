import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Container, Grid } from '@mui/material';

// @ts-ignore
function Counter({ title, initValue }) {
    const [count, setCount] = useState(initValue);
    const [step, setStep] = useState(1);
    function upHandler() {
        setCount(count + step);
    }
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount((oldCount:number)=> {return oldCount+1});
    //     }, 1000)
    // },[]);
    return (
        <div
            style={{
                border: '1px solid black',
                fontSize: 10,
                padding: 10,
            }}
        >
            <h1>{title}</h1>
            <Button variant="outlined" className="btn" onClick={upHandler}>
                +
            </Button>{' '}
            <input type='number' value={step} onChange={(evt)=> {
                // @ts-ignore
                setStep(Number(evt.target.value));
            }}/>
            {count}
        </div>
    );
}

function App() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <Counter title="카운터" initValue={0} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

//spacing={1} 1 -> 8px
