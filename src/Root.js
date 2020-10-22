import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Projects from './page/Projects';
import About from './page/About';
import Contact from './page/Contact';
import MainTempalte from './templates/MainTemplate';
import Intro from './component/containers/Intro';
import Nav from './component/containers/Nav';

function Root() {
  return (
    <MainTempalte>
      <RootStyled>
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
    </MainTempalte>
  );
}
const RootStyled = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.mainBlack};
`;
const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
  align-items:center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 700px){
    flex-wrap: wrap;
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
