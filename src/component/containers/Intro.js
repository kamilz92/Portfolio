import React from 'react'
import { H1 } from '../typography/Heading';
import Paragraph from '../typography/Paragraph'
import styled from 'styled-components';

const Intro = () => {
    return (
        <>
            <HeadingName big thin>Kamil Zak</HeadingName>
            <HeadingFront>Front-end dev.</HeadingFront>
            <ParagraphStyled>I see myself working with <strong>react</strong> because out of all technologies I learnerd
            I enjoy it the most. I know <strong>CSS frameworks</strong>, where <strong>SCSS</strong> is my favourite.  
            When it comes to <strong>JavaScript</strong> wise I know <strong>ES6, ES7</strong> and learning myself <strong>TypeScript</strong>
            Reacently I started getting into Node.js. My ultimate goal is to become <strong>FullStack-Developer</strong>. 
            I also have basic knowledge about Adobe Stock<strong>(XD, PS, Illustrator)</strong>. I'm open to new opportunities and chaleanges in my newly started career. 
            </ParagraphStyled>
        </>
    );
}

const HeadingName = styled(H1)`
    font-size: calc(5rem + 2.6vw);
    line-height: 0.9;
`;
const HeadingFront = styled(H1)`
    font-size: calc(2.4srem + 2.6vw);
    line-height: 0.9;
`;
const ParagraphStyled = styled(Paragraph)`
    font-weight: 400;
    padding: 3rem 0;
    line-height: 2.5rem;
`;
export default Intro;