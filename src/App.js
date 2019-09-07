import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Admin from './components/admin/index';
import Home from './components/home/index';
function App() {
  return (
    <div className="App">

      <Home/>
      <Admin/>
      
    </div>
  );
}

export default App;
