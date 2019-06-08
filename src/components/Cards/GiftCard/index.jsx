import React from 'react';

const GiftCard = props => {
    return ( 
        <a className='card giftCard' href={props.url} target='_blank' rel='noopener noreferrer'>
            <img src={props.img} alt="img"/>
            <div className='bottom'>
                <p className='title'>{props.title}</p>
                <p className='desc'>{props.desc}</p>
                <p className='price'>{props.price}</p>
            </div>
        </a>
     );
}
 
export default GiftCard;