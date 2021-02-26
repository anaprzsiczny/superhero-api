import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Info from './components/info';
import SearchBar from './components/searchbar';
import store from './store';
import Container from '@material-ui/core/Container'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container maxWidth="md">
          <SearchBar />
          <Info />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
