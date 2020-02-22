import './PlayerInfo.scss';
import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';

export default function PlayerInfo(props) {
    
    
    return (
        <div className='playerInfo-container'>
            <Card className='card'>
                <div className='info-div'>
                    <CardTitle>Name: {props.woman.name}</CardTitle>
                    <CardText>Country: {props.woman.country}</CardText>
                    <CardText>Searches: {props.woman.searches}</CardText>
                </div>
            </Card>
        </div>
    )
}

