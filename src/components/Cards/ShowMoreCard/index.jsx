import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ShowMoreCard = () => {
    return ( 
        <Link to='/showMorePage' className='card row showmore'>
            <p className='bold'>Show more</p>
        </Link>
     );
}
 
export default ShowMoreCard;