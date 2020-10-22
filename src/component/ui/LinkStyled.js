import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const comeFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;
const LinkStyled = styled(NavLink)`
    font-family:${({ theme }) => theme.secondaryFont} ;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: uppercase;
    display: inline-block;
    padding: .5em 0;
    width: 180px;
    text-align: center;
    overflow: hidden;
    &.active {
        position: relative;
        &::after {
            content: "";
            position: absolute;
            width: 22px;
            height: 100%;
            background-color: ${({ theme }) => theme.mainBlack};
            right: 0;
            top: 0;
            bottom: 0;
            clip-path: polygon(100% 0, 0 50%, 100% 100%);
            animation: ${comeFromRight} .5s linear;
        }
    }
`;
export default LinkStyled;