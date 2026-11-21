import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaReact, 
    FaNodeJs, 
    FaGitAlt, 
    FaGithub, 
    FaBolt, 
    FaShieldAlt, 
    FaMobileAlt, 
    FaDatabase,
    FaCheckCircle,
    FaRocket
} from 'react-icons/fa';
import { 
    SiMongodb, 
    SiExpress, 
    SiNextdotjs, 
    SiRedux, 
    SiTailwindcss, 
    SiTypescript, 
    SiFirebase, 
    SiPostman, 
    SiVite 
} from 'react-icons/si';

const About = () => {
    const skillGroups = [
        {
            category: "Frontend Engineering",
            desc: "Crafting fluid, high-performance, and responsive user interfaces.",
            items: [
                { name: "React 19", icon: <FaReact className="icon-react" />, level: "Expert" },
                { name: "Next.js", icon: <SiNextdotjs className="icon-next" />, level: "Advanced" },
                { name: "JavaScript (ES6+)", icon: <FaJs className="icon-js" />, level: "Expert" },
                { name: "TypeScript", icon: <SiTypescript className="icon-ts" />, level: "Proficient" },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="icon-tailwind" />, level: "Expert" },
                { name: "Redux Toolkit", icon: <SiRedux className="icon-redux" />, level: "Advanced" },
                { name: "HTML5 / CSS3", icon: <FaHtml5 className="icon-html" />, level: "Expert" },
                { name: "Vite", icon: <SiVite className="icon-vite" />, level: "Expert" },
            ]
        },
        {
            category: "Backend & Databases",
            desc: "Designing resilient REST APIs, authentication pipelines, and data models.",
            items: [
                { name: "Node.js", icon: <FaNodeJs className="icon-node" />, level: "Advanced" },
                { name: "Express.js", icon: <SiExpress className="icon-express" />, level: "Advanced" },
                { name: "MongoDB", icon: <SiMongodb className="icon-mongo" />, level: "Advanced" },
                { name: "RESTful APIs", icon: <FaRocket className="icon-api" />, level: "Expert" },
                { name: "Firebase", icon: <SiFirebase className="icon-firebase" />, level: "Proficient" },
                { name: "JWT & Auth", icon: <FaShieldAlt className="icon-shield" />, level: "Advanced" },
            ]
        },
        {
            category: "Workflow & Engineering Practices",
            desc: "Modern development workflows, version control, and performance optimization.",
            items: [
                { name: "Git & GitHub", icon: <FaGithub className="icon-git" />, level: "Expert" },
                { name: "Postman", icon: <SiPostman className="icon-postman" />, level: "Advanced" },
                { name: "Core Web Vitals", icon: <FaBolt className="icon-bolt" />, level: "Expert" },
                { name: "Responsive UI", icon: <FaMobileAlt className="icon-mobile" />, level: "Expert" },
            ]
        }
    ];

    const principles = [
        {
            icon: <FaBolt />,
            title: "Performance by Default",
            text: "Every byte counts. Optimized asset bundles, code-splitting, and memoization ensure sub-second interaction times."
        },
        {
            icon: <FaShieldAlt />,
            title: "Production Reliability",
            text: "Clean, predictable code architecture with resilient error boundaries, proper state isolation, and secure API handling."
        },
        {
            icon: <FaMobileAlt />,
            title: "Pixel-Perfect & Adaptive",
            text: "Fluid responsive layouts engineered across all screen sizes, from mobile devices up to ultra-wide displays."
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About & Architecture</span>
                    <h2 className="section-title">Engineering Mindset & Technical Stack</h2>
                    <p className="section-subtitle">
                        Delivering production-grade digital solutions backed by modern engineering principles and hands-on full-stack development experience.
                    </p>
                </div>

                {/* About Profile & Principles Grid */}
                <div className="about-bento-grid">
                    {/* Bio Card */}
                    <div className="bento-card bento-bio">
                        <div className="bio-tag">Background</div>
                        <h3>Who I Am & What I Build</h3>
                        <p>
                            I'm <span className="highlight-text">Adhil EK</span>, a results-driven <span className="highlight-text">Senior Frontend & MERN Stack Developer</span> based in Kerala, India. I specialize in turning complex product visions into elegant, accessible, and commercially successful web experiences.
                        </p>
                        <p>
                            Having built live production platforms like <a href="https://yumnest.in/" target="_blank" rel="noopener noreferrer" className="bio-link"><strong>Yum Nest</strong> (E-Commerce)</a> and <a href="https://adlynx.online/" target="_blank" rel="noopener noreferrer" className="bio-link"><strong>Adlynx</strong> (Agency Analytics SaaS)</a>, I understand both the engineering precision and the business impact required to deliver software that truly performs.
                        </p>
                        <div className="bio-highlights">
                            <div className="bio-highlight-item">
                                <FaCheckCircle className="check-ico" />
                                <span>Clean, maintainable component hierarchies</span>
                            </div>
                            <div className="bio-highlight-item">
                                <FaCheckCircle className="check-ico" />
                                <span>Seamless third-party API & payment integrations</span>
                            </div>
                            <div className="bio-highlight-item">
                                <FaCheckCircle className="check-ico" />
                                <span>Agile delivery with transparent communication</span>
                            </div>
                        </div>
                    </div>

                    {/* Principles Cards */}
                    <div className="bento-principles">
                        {principles.map((p, idx) => (
                            <div key={idx} className="principle-card">
                                <div className="principle-icon">{p.icon}</div>
                                <div>
                                    <h4>{p.title}</h4>
                                    <p>{p.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Skills Categorized */}
                <div className="skills-bento-section">
                    <h3 className="skills-heading">Technical Capabilities & Tooling</h3>
                    <div className="skills-grid">
                        {skillGroups.map((group, idx) => (
                            <div key={idx} className="skill-group-card">
                                <div className="skill-group-header">
                                    <h4>{group.category}</h4>
                                    <p>{group.desc}</p>
                                </div>
                                <div className="skills-badge-list">
                                    {group.items.map((skill, sIdx) => (
                                        <div key={sIdx} className="skill-badge-item">
                                            <span className="skill-icon-wrap">{skill.icon}</span>
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-level">{skill.level}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
