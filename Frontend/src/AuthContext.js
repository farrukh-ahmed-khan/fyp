// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check if user ID is stored in localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId); // Convert to number if needed
    }
  }, []);

  const getUserIdFromAuthentication = () => {
    return userId;
    {console.log("user id from auth context"+userId)}
  };

  return (
    <AuthContext.Provider value={{ getUserIdFromAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
