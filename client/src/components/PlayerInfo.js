import './PlayerInfo.scss';
import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';

export default function PlayerInfo(props) {
    
    
    return (
        <Card className='card'>
            <div className='info-div'>
                <CardTitle className='title'><span className='label'>Name:</span> {props.woman.name}</CardTitle>
                <CardText className='p'><span className='label'>Country:</span> {props.woman.country}</CardText>
                <CardText className='p'><span className='label'>Searches:</span> {props.woman.searches}</CardText>
            </div>
        </Card>
    )
}

