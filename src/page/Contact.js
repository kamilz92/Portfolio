import React, { useContext } from 'react';
import styled from 'styled-components';
import Paragraph from '../component/typography/Paragraph';
import { HeadingStyled } from './About';
import { LangContext } from '../context/LangContext';
import eng from '../json/eng.json';
import nor from '../json/nor.json';


const Contact = () => {
    const { isEnglish } = useContext(LangContext);
    const lang = isEnglish ? eng : nor;
    return (
        <div>
            <HeadingStyled>{lang.contact.heading}</HeadingStyled>
            <Paragraph padding="2rem 0">{lang.contact.a}</Paragraph>
            <Wrapper>
                <LinkStyled href="mailto:kamilzaku@gmail.com">kamilzaku@gmail.com</LinkStyled>
                <SpanStyled>{lang.contact.or}</SpanStyled>
                <LinkStyled rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kamilzakFrontEnd">Linkedin</LinkStyled>
            </Wrapper>
        </div>);
}
const Wrapper = styled.div`
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
`;

const LinkStyled = styled.a`
    font-size: 3rem;
    font-weight: 300;
`;

const SpanStyled = styled.span`
    font-size: 2rem;
    padding: 2rem 0;
`;
export default Contact;