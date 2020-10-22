import React from 'react';
import styled from 'styled-components';
import { H2 } from '../component/typography/Heading';
import Icon from '../component/ui/Icon';
import Paragraph from '../component/typography/Paragraph';
import PolaroidPicture from '../component/ui/PolaroidPicture';

import gitImg from '../assets/GitHub-Mark-64px.png';
import instagramImg from '../assets/instagram.png';
import linkenImg from '../assets/linkedin-logo.png';

const About = () => {
    return (
        <div>
            <HeadingStyled>Well that's me</HeadingStyled>
            <Paragraph padding="2rem 0">I'm Polish but i've been living in Norway since I was 15 years old. 
            I live in Bergen with my fiancé and cat named Luna. My hobbies are gaming, anime, technology, traveling, books and learning new things. </Paragraph>
            <Wrapper>
                <PolaroidPicture />
                <Wrapper2>
                    <Icon link="https://github.com/kamilz92" src={gitImg} />
                    <Icon link="https://www.instagram.com/k4milzak/" src={instagramImg} />
                    <Icon link="https://www.linkedin.com/in/kamilzakFrontEnd" src={linkenImg} />
                </Wrapper2>
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
    display: flex;
    justify-content: center;
`;
const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 1rem;
`;
export default About;