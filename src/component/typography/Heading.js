// import React from 'react';
import styled from 'styled-components';

// const HeadingTest = (props) => {
//     if (props.size === 'h1') {
//         return <H1>{props.children}</H1>;
//     } else if (props.size === "h2") {
//         return <H2>{props.children}</H2>;
//     } else if (props.size === "h3") {
//         return <H3>{props.children}</H3>;
//     } else if (props.size === 'h4') {
//         return <H4>{props.children}</H4>;
//     } else if (props.size === 'h5') {
//         return <H5>{props.children}</H5>;
//     } else if (props.size === 'h6') {
//         return <H6>{props.children}</H6>;
//     } else {
//         return <span>{props.children}</span>;
//     }
// }

export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${props => props.thin ? 100 : null};
    padding: ${props => props.padding ? props.padding : null}
`;
export const H2 = styled.h2`
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
    font-weight: ${({ theme, thin }) => (thin ? theme.thinFont : null)};
    line-height: .9;
`;
export const H3 = styled.h3`
font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${props => props.thin ? 100 : null};
    padding: ${props => props.padding ? props.padding : null}
`;
export const H4 = styled.h4`
font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${props => props.thin ? 100 : null};
    padding: ${props => props.padding ? props.padding : null}
`;
export const H5 = styled.h5`

`;
export const H6 = styled.h6`

`;
