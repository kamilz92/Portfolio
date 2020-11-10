import React, { useContext } from 'react';
import styled from 'styled-components';
import { H2, H3 } from '../component/typography/Heading';
import Icon from '../component/ui/Icon';
import Paragraph from '../component/typography/Paragraph';

import { LangContext } from '../context/LangContext';
import eng from '../json/eng.json';
import nor from '../json/nor.json';


import gitImg from '../assets/GitHub-Mark-64px.png';
import instagramImg from '../assets/instagram.png';
import linkenImg from '../assets/linkedin-logo.png';

const About = () => {
    const { isEnglish } = useContext(LangContext);
    const lang = isEnglish ? eng : nor;
    return (
        <div>
            <HeadingStyled>{lang.about.heading}</HeadingStyled>
            <Paragraph padding="2rem 0">{lang.about.a}</Paragraph>

            <Paragraph padding="1rem 0">{lang.about.b}</Paragraph>
            <H3>{lang.about.c}</H3>
            <Paragraph padding=".7rem 0 2rem">React, JS,HTML, CSS, Bootstrap, Less, SCSS, GIT, AdobePack, GULP</Paragraph>
            <Wrapper>
                <Icon link="https://github.com/kamilz92" src={gitImg} />
                <Icon link="https://www.instagram.com/k4milzak/" src={instagramImg} />
                <Icon link="https://www.linkedin.com/in/kamilzakFrontEnd" src={linkenImg} />
            </Wrapper>
        </div>
    );
}
export const HeadingStyled = styled(H2)`
    padding: 5px 0 0 15px;
    position: relative;
    &::before {
        position: absolute;
        content: "";
        left: -1px;
        top: 0;
        bottom: 0;
        width: 10px;
        height: 100%;
        background-color:  ${({ theme }) => theme.mainBlack};
    }
`;

const Wrapper = styled.div`
    width: 230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;
export default About;