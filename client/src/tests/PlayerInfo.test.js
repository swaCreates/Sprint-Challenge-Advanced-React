import React from 'react';
import PlayerInfo from '../components/PlayerInfo';
import { render, fireEvent } from "@testing-library/react";

test('renders PlayerInfo with props attributes', () => {
    const fakePlayer= [{id: 1, name: 'Eyvette'}, {id: 2, name: 'Jessica'}];
    render(<PlayerInfo woman={fakePlayer} />);
})

test('does not render player names', () => {
    const fakePlayer= [{id: 1, name: 'Eyvette'}, {id: 2, name: 'Jessica'}];
    const {getAllByTestId} = render(<PlayerInfo woman={fakePlayer} />);
    const names= getAllByTestId('card-name').map(name => name.textContent);
    const fakeNames= fakePlayer.map(player => player.name);
    // console.log(names);
    // console.log(fakeNames);
    expect(names).not.toEqual(fakeNames);
    expect(names).toBeTruthy();
})

test('see if .labels are in document', () => {
    const fakePlayer= [{id: 1, name: 'Eyvette'}, {id: 2, name: 'Jessica'}];
    const {getByText}= render(<PlayerInfo woman={fakePlayer} />);
    getByText(/name:/i);
    getByText(/country:/i);
    getByText(/searches:/i);
})

