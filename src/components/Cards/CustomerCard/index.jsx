import React from 'react';

const CustomerCard = props => {
    return ( 
        <div className='row card customerCard'>
            <img src={props.img} alt="imgd"/>
            <p className='name'>{props.name}</p>
            <p className='viewprof'>View Profile</p>
        </div>
     );
}
 
export default CustomerCard;