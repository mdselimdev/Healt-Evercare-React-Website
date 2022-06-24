import React from 'react';
import { Link } from 'react-router-dom';

const HomeDoctors = (props) => {
    const {id, name, img,title,time,price,institute } = props.doctor;
    return (
        <div className="p-2 single-doctor">
            <img className="w-100 rounded" height="250px" src={img} alt="" />
            <div className="p-4">
            <h3 style={{color:"#30336b",fontWeight:'600'}}>Name : {name}</h3>
            <h4 style={{color:"#30336b",fontWeight:'600'}}>Education : {title}</h4>
            <h3 style={{color:"#30336b",fontWeight:'600'}}>Institute : {institute}</h3>
            <h3 style={{color:"#30336b",fontWeight:'600'}}>Visit Time : {time}</h3>
                <h3 style={{ color: "#30336b", fontWeight: '600' }}>Visit Fee : {price} $</h3>
                <Link to={`/appointment/${id}`} className="appo-btn">Set Appointment</Link>
            </div>
        </div>
    );
};

export default HomeDoctors;