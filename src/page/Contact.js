import React from 'react';
import styled from 'styled-components';
import Paragraph from '../component/typography/Paragraph';
import { HeadingStyled } from './About';

const Contact = () => {
    return (
        <div>
            <HeadingStyled>Get in touch</HeadingStyled>
            <Paragraph padding="2rem 0">If thre is anything you are wondering about I would be more then willing to answer all your questions on:</Paragraph>
            <Wrapper>
                <LinkStyled href="mailto:kamilzaku@gmail.com">kamilzaku@gmail.com</LinkStyled>
                <SpanStyled>or</SpanStyled>
                <LinkStyled rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kamilzakFrontEnd">Linkedin</LinkStyled>
            </Wrapper>
        </div>);
}
const Wrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const LinkStyled = styled.a`
    font-size: 3rem;
    font-weight: 300;
`;

const SpanStyled = styled.span`
    font-size: 2rem;
    padding: 2rem 0;
    position: relative;
    display: inline;
    width: 3rem;
    align-self: center;
    &::before,&::after{
        content: '';
        position: absolute;
        height: 1px;
        width: 2.5rem;
        background-color:  ${({ theme }) => theme.mainBlack};
        top: calc(50% + 1px);
    }
    &::before{
        left: -40px;
    }
    &::after{
        right: -40px;
    }

`;
export default Contact;