import logo from './images/hbtn_logo.jpg';
import './App.css';
import * as util from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div className='email-form'>
            <label htmlFor='email'>Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='password-form'>
            <label htmlFor="passwd">Password:</label>
            <input type="password" name="passwd" id="passwd" />
          </div>
          <button type="button">OK</button>
        </form>
      </div>

      <footer className="App-footer">Copyright {util.getFullYear()} - holberton School</footer>
    </div>
  );

}

export default App;
