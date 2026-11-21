import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingHire.css';

const FloatingHire = () => {
    const whatsappNumber = "918848717499";
    const whatsappMsg = encodeURIComponent("Hi Adhil! I saw your portfolio and flagship projects (Yum Nest & Adlynx). Let's connect!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-hire-btn"
            aria-label="Direct WhatsApp Chat"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 1.5, type: 'spring' }}
        >
            <span className="floating-ping"></span>
            <div className="hire-tooltip">
                <span className="tooltip-dot"></span>
                <span>Chat on WhatsApp</span>
            </div>
            <FaWhatsapp className="whatsapp-floating-icon" />
        </motion.a>
    );
};

export default FloatingHire;
