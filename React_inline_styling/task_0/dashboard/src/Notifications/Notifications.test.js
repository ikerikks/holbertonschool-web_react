import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

test('renders three list items', () => {
  render(<Notifications />);
  const listItemElements = screen.getAllByRole('listitem');
  expect(listItemElements.length).toBe(3);
});

test('renders the text Here is the list of notifications', () => {
  render(<Notifications />);
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
});
