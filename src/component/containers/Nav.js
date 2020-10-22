import React from 'react'
import styled from 'styled-components';
import LinkStyled from '../ui/LinkStyled';

const Nav = () => {
    return (
        <nav>
            <UlStyled>
                <LiStyled><SpanStyled>01</SpanStyled><LinkStyled as={LinkStyled} to="/projects">Projekter</LinkStyled></LiStyled>
                <LiStyled><SpanStyled>02</SpanStyled><LinkStyled as={LinkStyled} to="/about">Om meg</LinkStyled></LiStyled>
                <LiStyled><SpanStyled>03</SpanStyled><LinkStyled as={LinkStyled} to="/contact">Kontakt</LinkStyled></LiStyled>
            </UlStyled>
        </nav>
    );
}
const UlStyled = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LiStyled = styled.li`
    margin: .5em 0;
    border: 2px solid ${({theme}) => theme.mainBlack};
    position: relative;
`;
const SpanStyled = styled.span`
    font-family: ${({theme}) => theme.secondaryFont};
    font-size: ${({theme}) => theme.fontSize.s};
    color:${({theme}) => `${theme.mainBlack}50`} ;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    font-weight: bold;
    position: absolute;
`;
export default Nav;
