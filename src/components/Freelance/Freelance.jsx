import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaClock, FaCheckCircle } from 'react-icons/fa';
import './Freelance.css';

const Freelance = () => {
    const whatsappNumber = "918848717499";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Adhil, I'm interested in working with you on a freelance project!")}`;

    const features = [
        {
            icon: <FaLaptopCode />,
            title: "Custom Web Apps",
            desc: "Tailored MERN stack solutions built from scratch to fit your business needs."
        },
        {
            icon: <FaRocket />,
            title: "Fast Delivery",
            desc: "Optimized workflow to get your project live as quickly as possible without bugs."
        },
        {
            icon: <FaClock />,
            title: "24/7 Support",
            desc: "Continuous communication and post-launch support for all your queries."
        }
    ];

    return (
        <section id="freelance" className="freelance-section">
            <div className="container">
                <motion.div
                    className="freelance-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="freelance-badge">Available for Freelance</div>

                    <div className="freelance-content">
                        <div className="freelance-text">
                            <h2>Let’s build something <span className="gradient-text">extraordinary</span> together.</h2>
                            <p>I help startups and businesses turn their ideas into high-performance web applications. Whether you need a simple landing page or a complex full-stack system, I'm here to help.</p>

                            <ul className="benefits-list">
                                <li><FaCheckCircle className="check-icon" /> Quality Codebase</li>
                                <li><FaCheckCircle className="check-icon" /> Responsive Design</li>
                                <li><FaCheckCircle className="check-icon" /> SEO Optimized</li>
                            </ul>

                            <div className="freelance-btns">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn hire-btn">
                                    Start a Project
                                </a>
                                <a href="#contact" className="btn btn-outline">Consultation</a>
                            </div>
                        </div>

                        <div className="freelance-features">
                            {features.map((f, i) => (
                                <div key={i} className="feature-item">
                                    <div className="feature-icon">{f.icon}</div>
                                    <div className="feature-info">
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Freelance;
