import React from 'react'
import defaultProfileImage from '../../../images/defaultprofile.png'


const ProfessionalCard = (props) => {
    const hasImage = () => {
        if(props.img) {
            return (
                <div>
                    <img className='otherImg' src={props.img} alt="milyimg"/>
                    <div className='bottom'>
                        <p>{props.imgDesc}</p>
                        <p className='link'>{props.link}</p>
                    </div>
                </div>
            )
        }
    }

    return ( 
        <a href={props.link} target='_blank' rel='noopener noreferrer'> 
            <div className='card professional-card'>
                <div className='top'>
                    <div className='row'>
                        <img src={props.profileImg ? props.profileImg : defaultProfileImage} alt="mily"/>
                        <div>
                            <p className='name'>{props.name}</p>
                            <p className='position'>{props.position}</p>
                            <p className='postTime'>{props.postTime}</p>
                        </div>
                    </div>
                    <p className='desc'>{props.desc}</p>
                </div>
                {hasImage()}
            </div>
        </a>
     );
}
 
export default ProfessionalCard;