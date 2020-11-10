import React, { useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { LangContext } from '../../context/LangContext';

const LangChange = () => {
    const [animation, setAnimation] = useState(false);
    const { isEnglish, setEnglishTrue, setEnglishFalse } = useContext(LangContext);

    const handleClickEng = () => {
        setAnimation(true);
        setTimeout(() => {
            setEnglishTrue();
        }, 1000)
        setTimeout(() => {
            setAnimation(false);
        }, 2000)
    }
    const handleClickNor = () => {
        setAnimation(true);
        setTimeout(() => {
            setEnglishFalse();
        }, 1000)
        setTimeout(() => {
            setAnimation(false);
        }, 2000)
    }
    return (
        <>
            {animation && <AnimationDiv />}
            <Wrapper>
                <WrapperButtons isEnglish={isEnglish}>
                    <ButtonStyled disabled={isEnglish} onClick={handleClickEng}>ENG</ButtonStyled>
                    <ButtonStyled disabled={!isEnglish} onClick={handleClickNor}>NOR</ButtonStyled>
                </WrapperButtons>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
    @media (max-width:700px){
        justify-content: center;
    }
`;

const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    font-family: ${({ theme }) => theme.primaryFont};
    padding: 1.25rem;
    font-size: 2rem;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:disabled{
        color: #000;
    }
`;
const WrapperButtons = styled.div`
    position: relative;
    &::before {
        position: absolute; 
        content: '';
        height: 4px;
        width: 50%;
        background-color: #000;
        bottom:0;
        transition: transform .25s linear;
        transform: ${(props) => props.isEnglish ? 'translateX(0)' : 'translateX(100%)'};
    }
`;
const langChangeAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50%  {
        transform: scale(150);
    }
    100%{
        transform: scale(0);
    }
`;
const AnimationDiv = styled.div`
    position:fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #F5DB36;
    animation: ${langChangeAnimation} 2s linear forwards;
    z-index: 2000;
    border-radius: 50%;
`;
export default LangChange;