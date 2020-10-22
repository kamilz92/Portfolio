import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${props => props.thin ? 100 : null};
    padding: ${props => props.padding ? props.padding : null}
`;

export default Paragraph;