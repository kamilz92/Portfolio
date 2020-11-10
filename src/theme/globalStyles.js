import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        * {
        margin: 0;
        padding: 0;
        }
        html {
            font-size: 62.5%;
            @media (max-width: 700px){
                font-size: 50%;
            }
        }
        p, a {
        font-family: ${({ theme }) => theme.secondaryFont};
        }
        h1,h2,h3,h4,h5,h6, span {
        font-family:  ${({ theme }) => theme.primaryFont};
        }
        a {
    color: ${({ theme }) => theme.mainBlack};
    text-decoration: none;
        }
`;

export default GlobalStyle;