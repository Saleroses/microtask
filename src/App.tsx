import React from 'react';
import './App.css';
import Cars from "./components/Cars";
import {topCars} from "./components/TopCars";
import Button from "./components/Button";
import UseState from "./components/useState";


function App() {
    return (
        <>
            <Cars topCars={topCars} />
            <Button />
            <UseState />
        </>
    )
}

export default App;
