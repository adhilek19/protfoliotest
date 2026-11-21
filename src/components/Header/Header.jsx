import React, { useState, useEffect } from 'react';
import { 
    FaBars, 
    FaTimes, 
    FaGithub, 
    FaLinkedin, 
    FaInstagram, 
    FaWhatsapp 
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Projects', href: '#projects', badge: 'Live' },
        { name: 'About & Skills', href: '#about' },
        { name: 'Services', href: '#freelance' },
        { name: 'Contact', href: '#contact' },
    ];

    const whatsappNumber = "918848717499";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Adhil! I'm interested in working with you.")}`;

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <a href="#hero" className="logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">Adhil</span>
                    <span className="logo-dot">.dev</span>
                    <span className="logo-bracket"> /&gt;</span>
                </a>

                <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="nav-link"
                                >
                                    <span>{link.name}</span>
                                    {link.badge && (
                                        <span className="nav-badge">{link.badge}</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions desktop-only">
                    <div className="social-icons">
                        <a href="https://github.com/adhilek19" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/adhil-ek-8b5aa4384/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/adhil.ek_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
                        <FaWhatsapp />
                        <span>Hire Me</span>
                    </a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Header;
