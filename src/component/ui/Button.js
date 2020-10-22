import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    padding: .5rem 1.5rem;
    cursor: pointer;
    position: relative;
    overflow:hidden;
    text-align: center;
    width: 70px;
    box-sizing: border-box;
    &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        height: 1px;
        width: 100%;
        background-color: ${({ theme }) => theme.mainBlack};
        transition: transform .25s linear;
    }
    &:hover::after{
        transform: translateX(-100%);
    }
`;

export default Button;