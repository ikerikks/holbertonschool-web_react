import * as utils from '../utils';
import './Footer.css';

export function Footer() {
  return (
    <footer className="App-footer">Copyright {utils.getFullYear()} - holberton School</footer>
  );
}