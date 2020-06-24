import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { userRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

import 'materialize-css';

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenteficated = !!token;
  const routes = userRoutes(isAuthenteficated);
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenteficated}}>
    <Router>
      <div className='container'>
        {routes}
      </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
