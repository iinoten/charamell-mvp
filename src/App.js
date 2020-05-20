import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import firebase from 'firebase'

import ContainerEdit from './Page/Container/ContainerEdit/ContainerEdit';
import ContainerMatch from './Page/Container/ContainerEdit/ContainerMatch';
import ContainerChat from './Page/Container/ContainerEdit/ContainerChat';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path='/'></Route>
              <Route path='/edit'><ContainerEdit /></Route>
              <Route path='/match'><ContainerMatch /></Route>
              <Route path='/chat'><ContainerChat /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
