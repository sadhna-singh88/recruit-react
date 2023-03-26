import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the App page', () => {
  render(
    
        <App />
     
  )
  expect(screen.getByText('Register Card Form')).toBeInTheDocument()
})