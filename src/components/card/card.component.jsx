import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://cdn.communitydragon.org/9.18.1/champion/${props.champion.key}/tile`}/>
         <h2>{ props.champion.name }</h2>
         <p>{ props.champion.title }</p>
    
    </div>
)