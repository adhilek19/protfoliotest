import React from 'react';
import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript, SiFirebase, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const About = () => {
    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express", icon: <SiExpress className="text-white" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            ]
        },
        {
            category: "Tools & Others",
            items: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            ]
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text-container">
                        <p>
                            I am a passionate <span className="highlight">MERN Stack Developer</span> with a strong foundation in web technologies.
                            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                            My goal is to always build products that provide pixel-perfect, performant experiences.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying the outdoors.
                        </p>
                    </div>

                    <div className="skills-container">
                        {skills.map((skillSet, index) => (
                            <div key={index} className="skill-category">
                                <h3>{skillSet.category}</h3>
                                <div className="skills-list">
                                    {skillSet.items.map((skill, idx) => (
                                        <div key={idx} className="skill-item">
                                            <div className="icon-box">
                                                {skill.icon}
                                            </div>
                                            <span>{skill.name}</span>
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
