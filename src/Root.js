import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LangContextProvider from './context/LangContext';
import styled from 'styled-components';
import Projects from './page/Projects';
import About from './page/About';
import Contact from './page/Contact';
import MainTempalte from './templates/MainTemplate';
import Intro from './component/containers/Intro';
import Nav from './component/containers/Nav';

import bgImg from './assets/desginBg.png';
import LangChange from './component/containers/LangChange';

function Root() {
  return (
    <MainTempalte>
      <LangContextProvider>
        <RootStyled>
          <LangChange />
          <Router>
            <ContentWrapper>
              <Col>
                <Intro />
                <Nav />
              </Col>
              <Col>
                <Switch>
                  <Route path="/" exact render={() => <Redirect to="/projects" />} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </Col>
            </ContentWrapper>
          </Router>
        </RootStyled>
      </LangContextProvider>
    </MainTempalte>
  );
}
const RootStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.mainBlack};
  background-image: url(${bgImg});
  background-repeat: repeat-x;
  background-size: 100%;
  background-position: bottom;

`;
const ContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  overflow: hidden;

  @media (max-width: 700px){
    flex-wrap: wrap;
    padding-bottom: 5vh;
  }
`;
const Col = styled.div`
  flex-basis: 45%;
  padding: 1rem;
  
  @media (max-width: 950px){
    flex-basis: 49%;
  }
  @media (max-width: 700px){
    flex-basis: 100%;
    min-height: auto;
  }
`;
export default Root;
