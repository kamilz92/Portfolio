import React, {useContext} from 'react'
import styled from 'styled-components';
import LinkStyled from '../ui/LinkStyled';
import { LangContext } from '../../context/LangContext';
import eng from '../../json/eng.json';
import nor from '../../json/nor.json';


const Nav = () => {
    const {isEnglish} = useContext(LangContext);
    const lang = isEnglish ? eng : nor;
    return (
        <nav>
            <UlStyled>
                <LiStyled><SpanStyled>01</SpanStyled><LinkStyled as={LinkStyled} to="/projects">{lang.nav.a}</LinkStyled></LiStyled>
                <LiStyled><SpanStyled>02</SpanStyled><LinkStyled as={LinkStyled} to="/about">{lang.nav.b}</LinkStyled></LiStyled>
                <LiStyled><SpanStyled>03</SpanStyled><LinkStyled as={LinkStyled} to="/contact">{lang.nav.c}</LinkStyled></LiStyled>
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
