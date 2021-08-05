import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FinalPage from './component/FinalPage/FinalPage.js';
import './App.css';



function App() {
  return (
      <main>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={FinalPage} exact />
            </Switch>
        </BrowserRouter>
      </main>
  )
}

export default App;
