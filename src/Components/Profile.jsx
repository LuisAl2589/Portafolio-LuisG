import React from 'react';
import './Profile.css';
import myPhoto from '../assets/img/Profile.jpg';

const Profile = () => {
    return (
            <div className='profile'>
                <img src={myPhoto} alt="Photo" />
            </div>
        
    );
}

export default Profile;