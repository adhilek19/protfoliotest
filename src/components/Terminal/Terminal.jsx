import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Terminal.css';

const Terminal = () => {
    return (
        <section className="terminal-section">
            <div className="container">
                <motion.div
                    className="terminal-window"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="close"></span>
                            <span className="minimize"></span>
                            <span className="maximize"></span>
                        </div>
                        <div className="terminal-title">bash — portfolio@adhil-ek</div>
                    </div>
                    <div className="terminal-body">
                        <div className="terminal-line">
                            <span className="terminal-prompt">adhil-ek@portfolio:~$</span>
                            <TypeAnimation
                                sequence={[
                                    ' npm star-t',
                                    500,
                                    ' npm start',
                                    1000,
                                    '',
                                ]}
                                speed={50}
                                cursor={false}
                            />
                        </div>
                        <div className="terminal-output">
                            <TypeAnimation
                                sequence={[
                                    2500,
                                    '> adhil-ek-portfolio@1.0.0 start\n> vite\n\n  VITE v5.0.0  ready in 450 ms\n\n  ➜  Local:   http://localhost:5173/\n  ➜  Network: use --host to expose\n\n  Portfolio running successfully... 🚀\n  Welcome to Adhil\'s world!\n',
                                ]}
                                speed={90}
                                style={{ whiteSpace: 'pre-line', display: 'block' }}
                                cursor={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Terminal;
