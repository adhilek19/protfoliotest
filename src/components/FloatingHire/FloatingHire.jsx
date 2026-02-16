import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingHire.css';

const FloatingHire = () => {
    const whatsappNumber = "918848717499";
    const whatsappMsg = encodeURIComponent("Hi Adhil, I saw your portfolio and I'm interested in hiring you for a project!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-hire-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 3 }}
        >
            <div className="tooltip">Hire Me!</div>
            <FaWhatsapp />
        </motion.a>
    );
};

export default FloatingHire;
