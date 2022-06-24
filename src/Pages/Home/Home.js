import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import HomeDoctors from '../HomeDoctors/HomeDoctors';
import HomeService from '../HomeService/HomeService';
import './Home.css';


const Home = () => {

    const { services ,doctors} = useAuth();

    const shortService = services.slice(0, 3);
    const shortDoctors = doctors.slice(0, 3);

    return (
        <div>
            <div className="banner">
            <Container>
            <div className="banner-content">
                <h1>Welcome to Our Hospital</h1>
                    <p className="banner-para">How can we help you ? What's your problem describe now or set an appoint to our experiance doctor</p>
                    <Link to="/doctors" className="appo-btn">See Our Doctors</Link>
                </div>
            </Container>
            </div>
            <Container>
                <div>
                    <h1 className="text-center py-4 fw-bolder fs-2">Our Services</h1>
                    <div className="doctor-container">
                        {
                            shortService.map(short=><HomeService key={short.key} short={short}></HomeService>)
                        }
                    </div>
                    <div className="text-center py-4">
                    <Link className="appo-btn" to="/services">See More Services</Link>
                    </div>
                </div>
                <div>
                    <h1 className="text-center py-4 fw-bolder fs-2">Our Doctors</h1>
                    <div className="doctor-container">
                        {
                            shortDoctors.map(doctor=><HomeDoctors key={doctor.key} doctor={doctor}></HomeDoctors>)
                        }
                    </div>
                    <div className="text-center py-4">
                    <Link className="appo-btn" to="/doctors">See More Doctors</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;