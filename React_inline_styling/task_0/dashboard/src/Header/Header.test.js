import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders img and h1 tags', () => {
    render(<Header />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
