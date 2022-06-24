import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../context/useAuth';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {

    const { doctors} = useAuth();

    return (
        <div className="my-5">
            <h1 className="text-center py-4 fw-bolder fs-2">Our Doctors</h1>
            <Container>
                <div className="doctor-container">
                {
                        doctors.map(doctor=> <Doctor key={doctor.key} doctor={doctor}></Doctor>)
                    }
                
                </div>
            </Container>
        </div>
    );
};

export default Doctors;