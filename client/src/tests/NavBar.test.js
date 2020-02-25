import React from 'react';
import NavBar from '../components/NavBar';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

test('navBar runs without crashing', () => {
    render(<NavBar/>);
})

test('to see if switch is rendering', () => {
    const {getByTestId}= render(<NavBar/>);
    const toggleSwitch= getByTestId('toggleSwitch')
    expect(toggleSwitch).toBeInTheDocument();
})

