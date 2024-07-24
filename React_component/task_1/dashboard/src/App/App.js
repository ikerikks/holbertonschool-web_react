import './App.css';
import React from 'react';
import { useEffect } from 'react';
// import { Notifications } from './Notifications';
// import { Header } from './Header/Header';
// import { Login } from './Login/Login';
// import { Footer } from './Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = function () { };
  }
  useEffect(()=> {
    const keys = {
      a: false,
      b: false,
    };

    const handleKeyDown = (e) => {
      keys.a = e.ctrlKey;
      keys.b = e.key === 'h';

      if (keys.a && keys.b) {
        logOut();
        alert('Logging you out');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

  });

  render() {
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
