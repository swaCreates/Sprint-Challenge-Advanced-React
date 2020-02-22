import './PlayerCard.scss';
import React from 'react';
import PlayerInfo from './PlayerInfo';

export default function PlayerCard(props) {
    
    
    return (
        <div className='playerCard-container'>
            {props.data.map(player => {
                return <PlayerInfo key={player.id} woman={player} />
            })}
        </div>
    )
}

