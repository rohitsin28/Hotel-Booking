import React from 'react';
import "./SearchItem.css"

function SearchItem() {
    return (
        <div className='searchItem'>
            <img src="https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='Hotel' className='siImg' />
            <div className='siDesc'>
                <h1 className='siTitle'>Tower Street Apartments</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'>Free airpot taxi</span>
                <span className='siSubtitle'>Studio Apartment with air Conditioning</span>
                <span className='siFeatures'>Entire studio 1 bathroom dubble bed</span>
                <span className='siCancelOp'>Free Cancellation</span>
                <span className='siCancelOpSubtitle'>You can cancle later, so lock in the great price today!</span>
            </div>
            <div className='siDetails'>
                <div className='siRating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>$123</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem