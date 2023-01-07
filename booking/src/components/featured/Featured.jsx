import React from 'react';
import "./Featured.css";

function Featured() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src='https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Patna</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className='featuredImg' />
            <div className='featuredTitles'>
                    <h1>Patna</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className='featuredImg' />
            <div className='featuredTitles'>
                    <h1>Patna</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured