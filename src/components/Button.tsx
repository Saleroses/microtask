import React, {MouseEvent} from 'react';
import Click from "./Click";

const Button = () => {

    const Button1Foo =(subscriber: string, age: number, adress: string)=>{
        console.log(subscriber, age, adress)
    }
    const Button2Foo =(subscriber: string, age: number, adress: string)=>{
        console.log(subscriber, age, adress)
    }
    const Button3Foo =(prikol: string)=>{
        console.log(prikol)
    }

    return (
        <div className={"button"}>
            <Click name={"N1"} callBack={()=>Button1Foo("Ivan", 11, "SPb")} />
            <Click name={"N2"} callBack={()=>Button2Foo("Vasya", 81, "Moscow")} />
            <Click name={"N3"} callBack={()=>Button3Foo("Sttuped buttom")} />
        </div>
    );
};

export default Button;