import React from 'react';
import 'materialize-css';
import { userRoutes } from './routes';


function App() {
  const routes = userRoutes(false);
  return (
    <div className='container'>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
