import React, {useState} from 'react';

const UseState = () => {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(a+1);
        console.log(a)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Click +1</button>
        </div>
    );
};

export default UseState;