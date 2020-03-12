import React, { useEffect } from 'react';
import styled from 'styled-components';
import './Cockpit.css';

const StyledButton = styled.button`
    background-color: ${props => props.alt === 'true' ? '#D32F2F' : '#4CAF50'};
    color: white;
    border: 0px solid #D32F2F;
    padding: 18px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Roboto';

    &:hover {
        background-color: ${props => props.alt === 'true' ? '#c34c2c' : '#00C853'};
        color: 'black';
    }
`;


const Cockpit = (props) => {

    console.log('Cockpit:', this);

    const classes = [];

    if (props.persons.length <= 2)
        classes.push('red');

    if (props.persons.length <= 1)
        classes.push('bold');

    useEffect(() => {
        console.log('[Cockpit.js] useEffects');
    });

    return (
        <div>
            <p style={{ fontFamily: 'Roboto' }} className={classes.join(' ')}>Hello There, This is React</p>
            <StyledButton
                onClick={props.switch.bind(this, 'Maximilian!!')}
            >
                Switch Name
            </StyledButton>
            <br />
            <br />
            <StyledButton
                alt={props.alt}
                onClick={props.click}
            >
                Toggle Persons
            </StyledButton>
        </div>
    );
};

export default Cockpit;