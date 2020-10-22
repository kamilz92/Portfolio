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
                liveLink="https://thirsty-visvesvaraya-e026ff.netlify.app/"
                codeLink="https://github.com/kamilz92/Portfolio" />
            <Project
                title="Solar Panles"
                technologies="Bootstrap, scss"
                delay='.5s'
                description="Bootrstrap tamplete"
                liveLink="https://kamilz92.github.io/bootstrapTamplate/"
                codeLink="https://github.com/kamilz92/bootstrapTamplate" />
            <Project
                title="MovieApp"
                technologies="React"
                delay='1s'
                description="A simple search that's let search for a game, movie etc. and add it to favourite"
                liveLink="https://upbeat-minsky-9ac33c.netlify.app/#/"
                codeLink="https://github.com/kamilz92/movieApp" />
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