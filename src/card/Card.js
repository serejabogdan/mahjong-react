import React from 'react';
import './Card.css';

export const Card = (props) => {
    return (
        <div className="card" onClick={props.onclick}>
            <div className="content">
                <div className="front">
                    
                </div>
                <div className="back">
                    {props.back}
                </div>
            </div>
        </div>
    );
};