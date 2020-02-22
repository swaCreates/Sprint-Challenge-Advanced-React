import React from 'react';
import PlayerCard from '../components/PlayerCard';
import { render, fireEvent } from "@testing-library/react";

test('playerCard runs without crashing', () => {
    render(<PlayerCard/>);
})