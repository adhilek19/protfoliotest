import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cursor.css';

const codeSnippets = ['{ }', '=>', 'const', 'async', 'await', '< />', 'MERN', 'API', 'JSON', '200 OK'];

const Cursor = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [codeParticles, setCodeParticles] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isPointerFine, setIsPointerFine] = useState(() => 
        typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true
    );
    const particleId = useRef(0);
    const lastSpawnTime = useRef(0);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(pointer: fine)');

        const handleMediaChange = (e) => setIsPointerFine(e.matches);
        mediaQuery.addEventListener('change', handleMediaChange);

        if (!mediaQuery.matches) {
            return () => mediaQuery.removeEventListener('change', handleMediaChange);
        }

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setMousePos({ x: clientX, y: clientY });

            const now = Date.now();
            // Throttled particle spawn to maintain 60fps
            if (now - lastSpawnTime.current > 120 && Math.random() > 0.6) {
                lastSpawnTime.current = now;
                const newParticle = {
                    id: particleId.current++,
                    text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                    x: clientX,
                    y: clientY,
                };
                setCodeParticles((prev) => [...prev.slice(-10), newParticle]);
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.closest('a') || target.closest('button') || target.closest('.project-showcase') || target.closest('.contact-method-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (!isPointerFine) return null;

    return (
        <div className="cursor-container" aria-hidden="true">
            {/* Main Cursor Dot */}
            <motion.div
                className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
            />

            {/* Subtle Code Snippet Particles */}
            <AnimatePresence>
                {codeParticles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        className="code-particle"
                        initial={{ opacity: 0.8, scale: 0.8, x: particle.x, y: particle.y }}
                        animate={{
                            opacity: 0,
                            y: particle.y - 35,
                            scale: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {particle.text}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Cursor;
