import React from 'react';
import Nation from '../CONST/Nation.js'


function Nat(props) {

    const nat = props.data;
    const nation = Nation; 
    const result = nation[nat]; 

    return (
        <>
            <p>{result}</p>
        </>
    )
}

export default Nat;