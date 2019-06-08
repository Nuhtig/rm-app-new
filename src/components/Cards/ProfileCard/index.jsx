import React from 'react'

const ProfileCard = props => {
    const populateProducts = props.products.map((product,index)=> {
        return (
            <li key={index}>
                {product}
            </li>
        )
    })

    return ( 
        <div className='card profilecard'>
            <img src={props.img} alt="some"/>
            <p className='name'>{props.name}</p>
            <p className='desc'>{props.desc}</p>
            <hr/>
            <div className='row'>
                <p>Last appointment:</p>
                <p>{props.date}</p>
            </div>
            <div className='row'>
                <p>Products:</p>
                <ol>{populateProducts}</ol>
            </div>
        </div>
     );
}
 
export default ProfileCard;