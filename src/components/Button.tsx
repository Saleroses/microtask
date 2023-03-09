import React from 'react';

const Button = () => {
    return (
        <div>
            <button onClick={(event)=>{console.log("Hello")}}>
                MyCoolButton
            </button>

            <button onClick={(event)=>{console.log("Hello")}}>
                MyCoolButton
            </button>
        </div>
    );
};

export default Button;