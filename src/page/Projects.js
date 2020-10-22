import React from 'react';
import styled from 'styled-components';
import Project from '../component/containers/Project';



const Projects = () => {
    return (
        <ProjectsDiv>
            <Project
                title="Portfolio"
                technologies="React, Styled Components"
                description="This minimalistic prtfolio, styled with styled components"
                codeLink=""
                liveLink="" />
            <Project
                title="Solar Panles"
                technologies="Bootstrap, scss"
                delay='.5s'
                description="Bootrstrap tamplete"
                codeLink=""
                liveLink="" />
            <Project
                title="MovieApp"
                technologies="React"
                delay='1s'
                description="A simple search that's let search for a game, movie etc. and add it to favourite"
                codeLink=""
                liveLink="" />
        </ProjectsDiv>
    );
}

const ProjectsDiv = styled.div`
    padding: 0 20px;
    height: 540px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-evenly;
`;
export default Projects;