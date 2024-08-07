import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    render(<Login />);
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByLabelText(/.*/).length).toBe(2);  // Adjust the regex to match your label text
  });
});
