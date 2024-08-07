// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from './App';

// test('App renders without crashing', () => {
//   render(<App />);
// });

// test('renders a div with the class App-header', () => {
//   render(<App />);
//   const headerElement = screen.getByClass('App-header');
//   expect(headerElement).toBeInTheDocument();
// });

// test('renders a div with the class App-body', () => {
//   render(<App />);
//   const bodyElement = screen.getByClass('App-body');
//   expect(bodyElement).toBeInTheDocument();
// });

// test('renders a div with the class App-footer', () => {
//   render(<App />);
//   const footerElement = screen.getByClass('App-footer');
//   expect(footerElement).toBeInTheDocument();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

describe('App Component', () => {
  it('contains the Notifications component', () => {
    render(<App />);
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
  });

  it('contains the Header component', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('contains the Login component', () => {
    render(<App />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('contains the Footer component', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
