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

  test('renders banner background image', () => {
    render(<Home />);
    const backgroundImage = screen.getAllByRole('img')[0];
    expect(backgroundImage).toHaveAttribute('src', expect.stringContaining('home-banner-background.png'));
  });

  test('renders banner main image', () => {
    render(<Home />);
    const mainImage = screen.getAllByRole('img')[1];
    expect(mainImage).toHaveAttribute('src', expect.stringContaining('home-banner-image.png'));
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
