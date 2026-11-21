import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
    return (
        <div className="ambient-background" aria-hidden="true">
            {/* Ambient Radial Lights */}
            <div className="ambient-orb orb-1"></div>
            <div className="ambient-orb orb-2"></div>
            <div className="ambient-orb orb-3"></div>

            {/* Subtle Grid Overlay */}
            <div className="grid-pattern-overlay"></div>
        </div>
    );
};

export default BackgroundAnimation;
