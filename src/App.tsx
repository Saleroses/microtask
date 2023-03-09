import React from 'react';
import './App.css';
import Cars from "./components/Cars";
import {topCars} from "./components/TopCars";
import Button from "./components/Button";


function App() {
    return (
        <>
            <Cars topCars={topCars} />
            <Button />
        </>
    )
}

export default App;
