import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import firebase from 'firebase'

import ContainerEdit from './Page/Container/ContainerEdit/ContainerEdit';
import ContainerMatch from './Page/Container/ContainerEdit/ContainerMatch';

firebase.initializeApp({
  apiKey: "AIzaSyAzYj-cfNsFGmaS0Si_ldZuT65eSN3yP98",
  authDomain: "charamell-mvp.firebaseapp.com",
  projectId: "charamell-mvp",
  databaseURL: "https://charamell-mvp.firebaseio.com",
  storageBucket: "gs://charamell-mvp.appspot.com'"
})

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
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
