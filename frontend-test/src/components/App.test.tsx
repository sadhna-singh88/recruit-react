import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom'
import RegisterCardForm from './RegisterCardForm';


test('renders the App page', () => {
  render(
    
        <App />
     
  )
  expect(screen.getByText('Register Card Form')).toBeInTheDocument()
})



test('renders the RegisterCardForm page', () => {
  //test for all input fields
  render(
    <RegisterCardForm/>
  )
  expect(screen.getByPlaceholderText('Credit Card Number')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('CVC')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Expiry Date')).toBeInTheDocument()
  expect(screen.getByText('Submit')).toBeInTheDocument()
})
