import React, { useEffect, useState } from 'react';
import './BackgroundAnimation.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';

const icons = [
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    SiMongodb, SiExpress, SiNextdotjs, SiRedux,
    FaBootstrap, SiTailwindcss, SiTypescript
];

const BackgroundAnimation = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Generate a list of items with random properties
        const newItems = [];
        const count = 60; // Increased density of falling items

        for (let i = 0; i < count; i++) {
            const IconComponent = icons[Math.floor(Math.random() * icons.length)];
            newItems.push({
                id: i,
                Icon: IconComponent,
                left: Math.random() * 100, // Random horizontal position %
                duration: 15 + Math.random() * 20, // Random duration between 15s and 35s (slower for logos)
                delay: Math.random() * -30, // Random negative delay
                size: 1.5 + Math.random() * 2, // Random size rem (slightly larger for icons)
                opacity: 0.15 + Math.random() * 0.2 // Random opacity
            });
        }
        setItems(newItems);
    }, []);

    return (
        <div className="background-animation">
            {items.map((item) => (
                <span
                    key={item.id}
                    className="falling-item"
                    style={{
                        left: `${item.left}%`,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                        fontSize: `${item.size}rem`,
                        opacity: item.opacity
                    }}
                >
                    <item.Icon />
                </span>
            ))}
        </div>
    );
};

export default BackgroundAnimation;
