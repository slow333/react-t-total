import './main.css';
import { Navbar } from './components';
import MyRoutes from './components/Navbar/router';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div>
      <Navbar />
      {/* <CssApp /> */}
      <MyRoutes />
    </div>
  );
}

export default App;
