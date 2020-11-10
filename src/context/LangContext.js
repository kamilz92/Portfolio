import React, { useState, createContext } from 'react';

export const LangContext = createContext();


const LangContextProvider = ({ children }) => {
    const [isEnglish, setEnglish] = useState(false);
    return (
        <LangContext.Provider value={{
            isEnglish: isEnglish,
            setEnglishTrue: () => (setEnglish(true)),
            setEnglishFalse: () => (setEnglish(false)),
        }}>
            {children}
        </LangContext.Provider>
    );
}

export default LangContextProvider;