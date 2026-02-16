import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cursor.css';

const codeSnippets = ['{ }', '( )', '=>', 'const', 'let', 'if', 'else', 'async', 'await', 'null', 'true', ';', '[ ]', '<div>', 'MERN', 'API'];

const Cursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [codeParticles, setCodeParticles] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const particleId = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setMousePos({ x: clientX, y: clientY });

            // Create a code particle every certain distance or movement
            if (Math.random() > 0.65) { // Increased spawn rate from 0.85
                const newParticle = {
                    id: particleId.current++,
                    text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                    x: clientX,
                    y: clientY,
                    rotation: Math.random() * 360,
                };

                setCodeParticles((prev) => [...prev.slice(-30), newParticle]); // Max 30 particles (increased from 15)
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.project-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="cursor-container">
            {/* Main Cursor Dot */}
            <motion.div
                className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
            />

            {/* Code Generating Particles */}
            <AnimatePresence>
                {codeParticles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        className="code-particle"
                        initial={{ opacity: 1, scale: 0.5, x: particle.x, y: particle.y, rotate: particle.rotation }}
                        animate={{
                            opacity: 0,
                            y: particle.y - 50, // Float up
                            scale: 1,
                            rotate: particle.rotation + 45
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {particle.text}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Cursor;
