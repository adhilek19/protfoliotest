import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaLaptopCode, 
    FaRocket, 
    FaCheckCircle, 
    FaWhatsapp, 
    FaChartBar, 
    FaShoppingCart, 
    FaBolt 
} from 'react-icons/fa';
import './Freelance.css';

const Freelance = () => {
    const whatsappNumber = "918848717499";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Adhil! I checked your portfolio and production work (Yum Nest & Adlynx). I'd like to discuss hiring you for a project!")}`;

    const services = [
        {
            icon: <FaShoppingCart />,
            title: "E-Commerce Platforms",
            desc: "Custom high-converting storefronts, frictionless checkout flows, fast product discovery, and payment integration (like Yum Nest).",
            badge: "E-Commerce"
        },
        {
            icon: <FaChartBar />,
            title: "SaaS & Analytics Dashboards",
            desc: "Cross-channel API tracking, complex interactive data visualizations, AI summaries, and CSV data ingestion (like Adlynx).",
            badge: "SaaS / BI"
        },
        {
            icon: <FaLaptopCode />,
            title: "Full-Stack MERN Engineering",
            desc: "End-to-end web applications with modular React frontends, robust Node/Express backends, and scalable MongoDB schemas.",
            badge: "Full-Stack"
        },
        {
            icon: <FaBolt />,
            title: "Performance & UI Revamps",
            desc: "Elevating existing codebases with modern design systems, 95+ Core Web Vitals scores, and mobile-first responsiveness.",
            badge: "Optimization"
        }
    ];

    const benefits = [
        "Production-tested architectural patterns",
        "100% responsive across mobile, tablet & desktop",
        "Sub-second load times & Core Web Vitals optimized",
        "Direct developer communication with zero agency fluff",
        "Ongoing post-launch maintenance & updates"
    ];

    return (
        <section id="freelance" className="section freelance-section">
            <div className="container">
                <motion.div
                    className="freelance-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="freelance-ambient-glow"></div>

                    <div className="freelance-content">
                        {/* Left Column: Proposition & CTAs */}
                        <div className="freelance-text">
                            <div className="freelance-badge">
                                <span className="pulse-dot"></span>
                                <span>Open for Contracts & Freelance</span>
                            </div>

                            <h2>
                                Ready to build your next <span className="gradient-text">high-performance</span> digital product?
                            </h2>
                            <p>
                                Whether you're launching a conversion-focused e-commerce brand like <strong className="text-white">Yum Nest</strong> or a data-rich SaaS analytics suite like <strong className="text-white">Adlynx</strong>, I turn ambitious requirements into reliable, production-ready code.
                            </p>

                            <ul className="benefits-list">
                                {benefits.map((b, i) => (
                                    <li key={i}>
                                        <FaCheckCircle className="check-icon" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="freelance-btns">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <FaWhatsapp />
                                    <span>Start a Project on WhatsApp</span>
                                </a>
                                <a href="#contact" className="btn btn-secondary">
                                    <span>Schedule a Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Services Grid */}
                        <div className="freelance-services-grid">
                            {services.map((s, i) => (
                                <div key={i} className="service-card">
                                    <div className="service-card-top">
                                        <div className="service-icon">{s.icon}</div>
                                        <span className="service-badge">{s.badge}</span>
                                    </div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
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
