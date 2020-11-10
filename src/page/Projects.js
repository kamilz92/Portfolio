import React, {useContext} from 'react';
import styled from 'styled-components';
import Project from '../component/containers/Project';
import { LangContext } from '../context/LangContext';
import eng from '../json/eng.json';
import nor from '../json/nor.json';


const Projects = () => {
    const {isEnglish} = useContext(LangContext);
    const lang = isEnglish ? eng : nor;
    return (
        <ProjectsDiv>
            <Project
                title="Portfolio"
                technologies="React, Styled Components"
                description={lang.projectsInfo.a}
                liveLink="https://thirsty-visvesvaraya-e026ff.netlify.app/"
                codeLink="https://github.com/kamilz92/Portfolio" />
            <Project
                title="Solar Panles"
                technologies="Bootstrap, scss"
                delay='.5s'
                description={lang.projectsInfo.b}
                liveLink="https://kamilz92.github.io/bootstrapTamplate/"
                codeLink="https://github.com/kamilz92/bootstrapTamplate" />
            <Project
                title="MovieApp"
                technologies="React"
                delay='1s'
                description={lang.projectsInfo.c}
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