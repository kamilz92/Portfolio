import React from 'react';
import styled from 'styled-components';

const Icon = (props) => {
    return (
        <a rel="noopener noreferrer" target="_blank" href={props.link}>
            <IconImg src={props.src} />
        </a>);
}


const IconImg = styled.img`
    height: 50px;
    width: 50px;
`;

export default Icon;
