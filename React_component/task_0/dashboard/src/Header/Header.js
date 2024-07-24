import logo from '../images/hbtn_logo.jpg';
import './Header.css';

export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        School dashboard
      </h1>
    </header>);
}

