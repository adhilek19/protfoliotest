import React from 'react';
import './Footer.css';
import { 
    FaGithub, 
    FaLinkedin, 
    FaInstagram, 
    FaWhatsapp, 
    FaHeart, 
    FaArrowUp 
} from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#hero" className="footer-logo">
                            <span className="bracket">&lt;</span>
                            <span>Adhil</span>
                            <span className="dot">.dev</span>
                            <span className="bracket"> /&gt;</span>
                        </a>
                        <p className="footer-tagline">
                            Senior Frontend & MERN Stack Developer crafting production-grade web systems.
                        </p>
                    </div>

                    <div className="footer-featured-links">
                        <span className="links-header">Flagship Deployments</span>
                        <a href="https://yumnest.in/" target="_blank" rel="noopener noreferrer">
                            Yum Nest (E-Commerce) ↗
                        </a>
                        <a href="https://adlynx.online/" target="_blank" rel="noopener noreferrer">
                            Adlynx (Analytics SaaS) ↗
                        </a>
                        <a href="https://help-desk-support.vercel.app/" target="_blank" rel="noopener noreferrer">
                            HelpDesk Support Suite ↗
                        </a>
                    </div>

                    <div className="footer-social-wrap">
                        <span className="links-header">Connect</span>
                        <div className="footer-social-icons">
                            <a href="https://github.com/adhilek19" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/adhil-ek-8b5aa4384/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/adhil.ek_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://wa.me/918848717499" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} Adhil EK. Crafted with React 19, Vite & Framer Motion.
                    </p>

                    <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
                        <span>Top</span>
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
