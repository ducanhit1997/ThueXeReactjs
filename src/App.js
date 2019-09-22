import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AdminPage from './containers/pages/admin/index';
import ErrorPage from './containers/pages/404/index';
import HomePage from './containers/pages/home/index';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
