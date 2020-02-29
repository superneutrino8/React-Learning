import React from 'react';

const person = (props) => {

    const style = {
        margin: '1em',
        padding: '1em',
        borderRadius: '.3em',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.9)'
    };

    const inputStyle = {
        padding: '0.5em'
    }

    return (
        <div style={style}>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old.</p>
            <input type="text" onChange={props.changed} style={inputStyle} placeholder="Enter"/>
        </div>
    );
};

export default person;