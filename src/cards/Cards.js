import React from 'react';
import {Card} from '../card/Card';

export const Cards = (props) => {
    const {ids, isSort, onCardClick} = props;
    if(isSort) {
        ids.sort();
    }
    return (
        <>
            {ids.map((card, index) => <Card back={card} key={`card ${index}`} onCardClick={onCardClick} />)}
        </>
    );
}