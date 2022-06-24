import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const { img, title,id } = props.short;
    return (
        <div>
            <div className="p-2 single-doctor">
            <img className="w-100 rounded" height="250px" src={img} alt="" />
            <div className="p-4">
            <h3 style={{color:"#30336b",fontWeight:'600'}}>Service : {title}</h3>
            
                <Link to={`/service/${id}`} className="appo-btn">See Details</Link>
            </div>
        </div>
        </div>
    );
};

export default HomeService;