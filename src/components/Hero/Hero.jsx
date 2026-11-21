import React from 'react';
import mypic from "../Hero/mypic.jpg";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import { 
    FaArrowDown, 
    FaWhatsapp, 
    FaRocket, 
    FaCode, 
    FaExternalLinkAlt, 
    FaCheckCircle 
} from 'react-icons/fa';
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiJavascript 
} from 'react-icons/si';

const Hero = () => {
    const whatsappNumber = "918848717499";
    const whatsappMsg = encodeURIComponent("Hi Adhil! I checked out your portfolio and production work (Yum Nest & Adlynx). Let's discuss a project!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-ambient-glow"></div>
            
            <motion.div
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-text">
                    <motion.div variants={itemVariants} className="hero-status-pill">
                        <span className="pulse-dot"></span>
                        <span>Available for Freelance & Full-Time Roles</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="hero-name">
                        Hi, I'm <span className="highlight-name">Adhil EK</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="type-container">
                        <TypeAnimation
                            sequence={[
                                'Senior Frontend Developer',
                                2200,
                                'Full-Stack MERN Specialist',
                                2200,
                                'Architecting Scalable SaaS & E-Commerce',
                                2200,
                                'Creator of Yum Nest & Adlynx',
                                2200,
                            ]}
                            wrapper="h2"
                            speed={50}
                            repeat={Infinity}
                            className="typing-text"
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero-bio">
                        Engineering high-performance, pixel-perfect web applications with modern React, Node.js, and scalable cloud architecture. Creator behind live production platforms including <a href="https://yumnest.in/" target="_blank" rel="noopener noreferrer" className="inline-link"><strong>Yum Nest</strong> ↗</a> (E-Commerce) and <a href="https://adlynx.online/" target="_blank" rel="noopener noreferrer" className="inline-link"><strong>Adlynx</strong> ↗</a> (Marketing Analytics SaaS).
                    </motion.p>

                    {/* Quick Stats Banner */}
                    <motion.div variants={itemVariants} className="hero-stats-row">
                        <div className="hero-stat">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Production Platforms Live</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Web Apps Deployed</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="hero-btns">
                        <a href="#projects" className="btn btn-primary">
                            <span>Explore Flagship Work</span>
                            <FaRocket />
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                            <FaWhatsapp />
                            <span>WhatsApp Me</span>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>Let's Talk</span>
                        </a>
                    </motion.div>
                </div>

                {/* Right Side Visual Showcase */}
                <motion.div
                    className="hero-visual"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="avatar-wrapper">
                        {/* Rotating Ambient Ring */}
                        <div className="ambient-ring"></div>
                        
                        <div className="avatar-frame">
                            <img src={mypic} alt="Adhil EK - Frontend & MERN Developer" className="profile-pic" />
                            <div className="avatar-overlay-gradient"></div>
                        </div>

                        {/* Floating Tech Badges */}
                        <motion.div 
                            className="floating-tech-badge badge-react"
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <SiReact className="tech-icon-react" />
                            <span>React 19</span>
                        </motion.div>

                        <motion.div 
                            className="floating-tech-badge badge-node"
                            animate={{ y: [8, -8, 8] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <SiNodedotjs className="tech-icon-node" />
                            <span>Node.js</span>
                        </motion.div>

                        <motion.div 
                            className="floating-tech-badge badge-mongo"
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <SiMongodb className="tech-icon-mongo" />
                            <span>MongoDB</span>
                        </motion.div>

                        {/* Floating Production Deploy Pill */}
                        <motion.div 
                            className="floating-tech-badge badge-live"
                            animate={{ scale: [0.98, 1.02, 0.98] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="pulse-dot"></span>
                            <span>yumnest.in & adlynx.online</span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.a
                href="#about"
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                aria-label="Scroll down to About section"
            >
                <span className="scroll-text">Scroll Down</span>
                <FaArrowDown className="scroll-arrow" />
            </motion.a>
        </section>
    );
};

export default Hero;
