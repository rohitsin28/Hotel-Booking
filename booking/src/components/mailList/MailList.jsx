import React from 'react';
import "./MailList.css";

function mailList() {
    return (
        <div className='mail'>
            <h1 className='mailTitle'>Save time, save money!</h1>
            <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
            <div className='mailInputContaainer'>
            <input type="text" placeholder='your Email'/>
            <button>Subscribe</button>
            </div>
        </div>
    )
}

export default mailList