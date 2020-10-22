import React from 'react'
import styled from 'styled-components';
import imgMe from '../../assets/me2.jpg';
import Paragraph from '../typography/Paragraph';

const PolaroidPicture = () => {
    return (
        <Frame>
            <div>
                <StyledImg src={imgMe} alt="" />
            </div>
            <Caption>#ME</Caption>
        </Frame>
    );
}
const StyledImg = styled.img`
    width: 200px;
    height: 200px;
`;
const Frame = styled.div`
    height: 300px;
    width: 240px;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform .2s linear, box-shadow .2s linear;
    &:hover {
        transform: scale(1.1) rotate(2deg);
        box-shadow: 0 5px 30px #000;
    }
`;
const Caption = styled(Paragraph)`
    font-size: 2.4rem;
    margin: auto;
    color:#000;;
`;
export default PolaroidPicture;