import React from 'react';
import './Footer.css';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>
                    &copy; {new Date().getFullYear()} Adhil EK. All rights reserved.
                </p>
                <div className="social-links">
                    <a href="https://github.com/adhilek19" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/adhil-ek-8b5aa4384/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/adhil.ek_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
               
            </div>
        </footer>
    );
};

export default Footer;
