import React from 'react'
import followUpImg from '../../../images/follow_up.png';
import rightIcon from '../../../images/right.png';

const FollowUpCard = () => {
    return ( 
        <div className='card row card-full top-card'>
            <img width='40px' height='40px' src={followUpImg} alt="calenderimg"/>
                <div>
                    <h3>Follow-up</h3>
                    <div className='row cases'>
                        <div className='number'>5</div>
                        <span>Cases</span>
                    </div>
                </div>
            <img className='rightIcon' src={rightIcon} alt="right"/>
        </div>
     );
}
 
export default FollowUpCard;