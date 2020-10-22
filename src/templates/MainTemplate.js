import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../theme/globalStyles';
import { theme } from '../theme/theme';

const MainTempalte = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    );
}

// MainTempalte.propTypes= {
//     children: PropTypes.
// }
export default MainTempalte;