import React from 'react'

const BirthdayCard2 = (props) => {
    return ( 
        <div className='card row bithdaycard card-image'>
            <img src={props.img} alt="hsbc"/>
            <div className='content'>
                <p className='name'>{props.name}</p>
                <p className='dob'>{props.dob}</p>
                <p className='desc'>Wish {props.name} a happy birthday or send a gift!</p>
                <div className='row notif'>
                    <p className='gift'>Send gift</p>
                    <p className='message'>Send message</p>
                </div>
            </div>
        </div>
     );
}
 
export default BirthdayCard2;