import React from 'react';
import NavBar from '../components/NavBar';
import { render, fireEvent } from "@testing-library/react";

test('navBar runs without crashing', () => {
    render(<NavBar/>);
})