import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact-box my-5">
            <h1 className="text-center py-4 fw-bolder fs-2">Contact</h1>
            <input type="text" placeholder="Enter your full name" />
            <input type="email" placeholder="Enter your email" />
            <textarea cols="15" rows="5" placeholder="Write your Messege"></textarea>
            <input type="submit" value="Send" />
            </div>
            <div>
                <Container>
                <h1 className="text-center py-4 fw-bolder fs-2">Google Map</h1>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10324.833844920582!2d90.4112470307208!3d23.805082284884904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1634621453510!5m2!1sen!2sbd" className="w-100 p-1 rounded-2 border border-danger mb-4" height="300" ></iframe>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Contact;