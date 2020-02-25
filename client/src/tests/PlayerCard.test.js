import React from 'react';
import PlayerCard from '../components/PlayerCard';
import { render, fireEvent } from "@testing-library/react";

test('renders PlayerCard with props attributes', () => {
    const cardData= [{name: 'Teresa', country: 'USA', searches: 50}];
    render(<PlayerCard data={cardData} />) 
})

