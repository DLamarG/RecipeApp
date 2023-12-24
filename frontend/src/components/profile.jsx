import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo2.png';
import './profilepage.css'

function profileCard(){
  return (
    
   <div className='upc'>
     <div className='gradiant'></div>
     <div className="profile-down">
        <imag src={logo} alt="" />
        <div className="profile-tiltle">Username</div>
        <div className="profile-description">
         I like tacos, and cake on the weekends!
        </div>
        <div className="profile-button"><Link className="" to="/home">Contact Me</Link></div>
     </div>
   </div>
  );
}

export default profileCard;