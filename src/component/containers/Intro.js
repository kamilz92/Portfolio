import React, { useContext } from 'react'
import { H1 } from '../typography/Heading';
import Paragraph from '../typography/Paragraph'
import styled from 'styled-components';
import { LangContext } from '../../context/LangContext';
import eng from '../../json/eng.json';
import nor from '../../json/nor.json';

const Intro = () => {
    const { isEnglish } = useContext(LangContext);
    const lang = isEnglish ? eng : nor;
    return (
        <>
            <HeadingName big thin>Kamil Zak</HeadingName>
            <HeadingFront>{lang.title}</HeadingFront>
            <ParagraphStyled>
                {lang.intro.a}
            </ParagraphStyled>
        </>
    );
}

const HeadingName = styled(H1)`
    font-size: calc(5rem + 2.6vw);
    line-height: 0.9;
`;
const HeadingFront = styled(H1)`
    font-size: calc(3rem + 1.1vw);
    line-height: 0.9;
`;
const ParagraphStyled = styled(Paragraph)`
    font-weight: 400;
    padding: 3rem 0;
    line-height: 2.5rem;
`;
export default Intro;