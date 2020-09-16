import React from 'react';
import './Card.css';

export const Card = (props) => {
    return (
        <div className="card" onClick={props.onCardClick}>
            <div className="front">
                {/* <img src="../../scn.png" alt=""/> */}
            </div>
            <div className="back">
                {props.back}
            </div>
        </div>
    );
};