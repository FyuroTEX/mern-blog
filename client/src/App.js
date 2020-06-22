import React from 'react';
import 'materialize-css';
import { BrowserRouter as Router } from 'react-router-dom';
import { userRoutes } from './routes';


function App() {
  const routes = userRoutes(false);
  return (
    <Router>
      <div className='container'>
        {routes}
      </div>
    </Router>
  );
}

export default App;
