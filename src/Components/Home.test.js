import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home Component', () => {
  
  test('renders Navbar component', () => {
    render(<Home />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });


  test('renders primary heading', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Your Favourite Food Delivered Hot & Fresh/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders primary text', () => {
    render(<Home />);
    const primaryTextElement = screen.getByText(/Healthy switcher chefs do all the prep work/i);
    expect(primaryTextElement).toBeInTheDocument();
  });

  test('renders order button', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', { name: /Order Now/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
