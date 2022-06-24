import React, { createContext } from 'react';
import Firebase from '../components/useFirebase/Firebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    const allContext = Firebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;