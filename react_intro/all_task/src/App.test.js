import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('renders a div with the class App-header', () => {
  render(<App />);
  const headerElement = screen.getByClass('App-header');
  expect(headerElement).toBeInTheDocument();
});

test('renders a div with the class App-body', () => {
  render(<App />);
  const bodyElement = screen.getByClass('App-body');
  expect(bodyElement).toBeInTheDocument();
});

test('renders a div with the class App-footer', () => {
  render(<App />);
  const footerElement = screen.getByClass('App-footer');
  expect(footerElement).toBeInTheDocument();
});
