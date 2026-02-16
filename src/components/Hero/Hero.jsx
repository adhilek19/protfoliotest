import React from 'react';
import mypic from "../Hero/mypic.jpg"
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import { FaArrowDown, FaWhatsapp } from 'react-icons/fa';
// import profileImg from '../../assets/profile.jpg';
const profileImg = "http://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

const Hero = () => {
    const whatsappNumber = "918848717499";
    const whatsappMsg = encodeURIComponent("Hi Adhil, I saw your portfolio and I'm interested in hiring you for a project!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section id="hero" className="hero">
            <motion.div
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-text">
                    <motion.h3 variants={itemVariants}>Hello, I'm</motion.h3>
                    <motion.h1 variants={itemVariants}>Adhil EK</motion.h1>
                    <motion.div variants={itemVariants} className="type-container">
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Developer',
                                2000,
                                'Full Stack Specialist',
                                2000,
                                'Building Scalable Web Apps',
                                2000,
                                'UI/UX Enthusiast',
                                2000,
                            ]}
                            wrapper="h2"
                            speed={50}
                            repeat={Infinity}
                            className="typing-text"
                        />
                    </motion.div>
                    <motion.p variants={itemVariants}>
                        I build exceptional digital experiences with the MERN stack (MongoDB, Express, React, Node.js).
                        Focusing on performance, accessibility, and modern web development.
                    </motion.p>
                    <motion.div variants={itemVariants} className="hero-btns">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn hire-btn">
                            Hire Me <FaWhatsapp style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#projects" className="btn btn-outline">View Work</a>
                        <a href="#contact" className="contact-link">Let's Talk →</a>
                    </motion.div>
                </div>
                <motion.div
                    className="hero-visual"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="image-container">
                        <img src={mypic} alt="Adhil EK" className="profile-pic" />
                        <div className="image-border"></div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.a
                href="#about"
                className="scroll-down"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <FaArrowDown />
            </motion.a>
        </section>
    );
};

export default Hero;
