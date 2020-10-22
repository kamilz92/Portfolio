import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../ui/Button';
import {H2} from '../typography/Heading';
import Paragraph from '../typography/Paragraph';


const Project = (props) => {
    return (
        <ProjectDiv delay={props.delay} middle={props.middle}>
            <H2>{props.title}</H2>
            <ParagraphTechno thin>{props.technologies}</ParagraphTechno>
            <ParagraphDescription>{props.description}</ParagraphDescription>
            <ButtonWrapper>
                <Button target="_blank" href={props.liveLink}>Live</Button>
                <Button target="_blank" href={props.codeLink}>Code</Button>
            </ButtonWrapper>

        </ProjectDiv>
    );
}
const Slide = keyframes`
    0%{
        opacity: 0;
        transform: translateX(100px);
    }

    100%{
        opacity: 1;
        transform: translateX(0);
    }
`;

const ProjectDiv = styled.div`
    opacity: 0;
    padding: .75rem 2rem;
    border: 1px solid  ${({ theme }) => theme.mainBlack};
    margin:${props => props.middle ? '20px 0' : null} ;
    animation: ${Slide} .5s linear forwards ${props => props.delay};
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;
const ParagraphTechno = styled(Paragraph)`
    padding-top: .5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
`;
const ParagraphDescription = styled(Paragraph)`
    padding: 1.5rem 0;
`;
export default Project;