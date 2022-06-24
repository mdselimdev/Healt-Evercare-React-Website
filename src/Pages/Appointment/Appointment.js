import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Appointment = () => {

    const { appId } = useParams();

    return (
        <div style={{margin:'150px 0'}} className='text-center'>
            
            <h1 className="text-danger fw-bold">Your Appoint Ment Set At 9 p.m</h1>
            <h3 className="text-success fw-bold">Your Serial Number is {appId}</h3>
            <h5 className="text-warning fw-bold">Come stand time ? Don't Let ! </h5>
            <Link className="appo-btn" to="/home">Go Home</Link>
        </div>
    );
};

export default Appointment;