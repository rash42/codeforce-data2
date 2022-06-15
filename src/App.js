import './App.css';
import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {
  //Try to add into the test branch
  return (
    <div className="App">
      <Provider store={store}>
        <Main></Main>
        
      </Provider>

    </div >
  );
}

export default App;