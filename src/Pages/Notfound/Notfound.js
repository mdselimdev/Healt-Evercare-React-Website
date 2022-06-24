import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div>
            <div className='not-found-page text-center'>
                <div className="not-found">
                <h1>4 <span className='zero'>0</span> 4</h1>
                <h3>Page Not Found</h3>
                <Link to="/home" className="appo-btn">Please Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Notfound;