import React, { useContext, useState } from 'react'
import { fakeAuthProvider } from '../utils/auth';

const AuthContext = React.createContext();

// Custom hook to get Auth Context
export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signin = (newUser) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
    });
  };

  const signout = () => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}