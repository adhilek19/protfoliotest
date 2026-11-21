import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Terminal.css';
import { FaTerminal } from 'react-icons/fa';

const Terminal = () => {
    return (
        <section className="terminal-section">
            <div className="container">
                <motion.div
                    className="terminal-window"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="dot close"></span>
                            <span className="dot minimize"></span>
                            <span className="dot maximize"></span>
                        </div>
                        <div className="terminal-title">
                            <FaTerminal className="term-icon" />
                            <span>adhil@portfolio: ~/production-deployments</span>
                        </div>
                        <div className="terminal-badges">
                            <span className="badge-live-pulse"></span>
                            <span>NODE v24</span>
                        </div>
                    </div>

                    <div className="terminal-body">
                        <div className="terminal-line">
                            <span className="terminal-prompt">adhil-ek@portfolio:~$</span>
                            <span className="terminal-cmd">curl -s https://api.adhil.dev/deployments/production</span>
                        </div>

                        <div className="terminal-output">
                            <TypeAnimation
                                sequence={[
                                    1000,
                                    `HTTP/2 200 OK — Production Cluster Active ⚡
{
  "developer": "Adhil EK",
  "role": "Senior Frontend & MERN Engineer",
  "production_projects": [
    {
      "name": "Yum Nest",
      "url": "https://yumnest.in",
      "type": "E-Commerce Platform",
      "status": "LIVE 🚀",
      "features": ["Spice Catalog", "Cart & Checkout", "High Speed"]
    },
    {
      "name": "Adlynx",
      "url": "https://adlynx.online",
      "type": "Marketing Analytics SaaS",
      "status": "LIVE 🚀",
      "features": ["Meta & Google Ads API", "AI Summaries", "CSV Engine"]
    }
  ],
  "stack": ["React 19", "Node.js", "Express", "MongoDB", "Tailwind"],
  "status": "Open to high-impact projects & contracts"
}`,
                                ]}
                                speed={90}
                                style={{ whiteSpace: 'pre-wrap', display: 'block' }}
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
