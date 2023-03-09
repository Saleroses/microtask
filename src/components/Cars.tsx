import React from 'react';
import {topCars} from "./TopCars";


type Props = {
    //topCars: ArrayTopCars[]
    topCars: Array<ArrayTopCars>
}

type ArrayTopCars = {
    manufacturer: string,
    model: string
}


const Cars = (props: Props) => {
        return (
            <table>
                {props.topCars.map((ArrayTopCars, index) => {
                    return (
                        <tr key={index}>
                            <td>{ArrayTopCars.manufacturer}</td>
                            <td>{ArrayTopCars.model}</td>
                        </tr>
                    )
                })}
            </table>
        );
    }
;

export default Cars;