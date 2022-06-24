import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>;
    const instagram = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>;
    const twitter = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>;
    const youtube = <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>;
    return (
        <div className="footer-style">
<Container>
             <div className="d-flex justify-content-between align-items-center py-3">  
            
            
            <p className='mb-0 fw-bold text-white fs-5'> &copy;All right reserved by 2021 || Health Evercare</p>
            
            <div className="social-icon">
                <a target="_blank" href="https://www.instagram.com/__aryan__selim/">{instagram}</a>
                <a target="_blank" href="https://www.facebook.com/md.aryan.selim/">{facebook}</a>
                <a target="_blank" href="https://twitter.com/AryanSelim">{twitter}</a>
                <a target="_blank" href="https://www.youtube.com/channel/UCCk28jY5BNRAWnN0JvtoRUg">{youtube}</a>
            </div>
            
        </div>
       </Container>
        </div>
        
    );
};

export default Footer;