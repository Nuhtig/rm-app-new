import React from 'react'

const TopNewsCard = (props) => {
    if (props.img === undefined) {
        return ( 
            <a href={props.link} target='_blank' rel='noopener noreferrer'> 
                <div className='card top-news-card'>
                    <h4>{props.title}</h4>
                    <p className='link'>{props.link}</p>
                    <p><span>{props.date}</span>{props.desc}</p>
                </div>
            </a>
         );
    } else {
        return ( 
            <a href={props.link} target='_blank' rel='noopener noreferrer'> 
                <div className='card card-image top-news-card row'>
                    <img src={props.img} alt="hsbc"/>
                    <div className='content'>
                        <h4>{props.title}</h4>
                        <p className='link'>{props.link}</p>
                        <p><span>{props.date}</span>{props.desc}</p>
                    </div>
                </div>
            </a>
         );
    }
}
 
export default TopNewsCard;