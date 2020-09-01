import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Container from './container/container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container/>
      </div>
    </Provider>
  );
}

export default App;
