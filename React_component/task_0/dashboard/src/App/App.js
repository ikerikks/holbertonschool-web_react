import './App.css';
import React from 'react';
import { Notifications } from './Notifications';
import { Header } from './Header/Header';
import { Login } from './Login/Login';
import { Footer } from './Footer/Footer';


class App extends React.Component {
  render () {
    return (
    <>
      <Notifications />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
    );
  }
}

export default App;
