import React from 'react';
import Image from 'react-shimmer';
import Skeleton from 'react-loading-skeleton';


const TopNewsCard = (props) => {
    if(!props.dataLoaded) {
        return (
            <div className='card card-image top-news-card row'>
                <div className='imgcontainer'>
                </div>
                <div className='content'>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton height={100} />
                </div>
            </div>
        )
    }
    if (props.img === undefined || props.img === '') {
        return ( 
            <a href={props.link} target='_blank' rel='noopener noreferrer'>
                <div className='card top-news-card'>
                    <h4>{props.title}</h4>
                    <p className='link'>{props.website}</p>
                    <p><span>{props.date}</span>{props.desc}</p>
                </div>
            </a>
         );
    } else {
        return ( 
            <a href={props.link} target='_blank' rel='noopener noreferrer'> 
                <div className='card card-image top-news-card row'>
                    <div className='imgcontainer'>
                        <Image 
                        src={props.img} 
                        width={640} height={480}
                        />
                    </div>
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