import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Project Alpha',
            description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            live: '#',
            color: 'linear-gradient(135deg, #6366f1, #a855f7)'
        },
        {
            title: 'Project Beta',
            description: 'Real-time chat application using Socket.io and React. Supports private messaging, group chats, and file sharing.',
            technologies: ['React', 'Socket.io', 'Express'],
            github: '#',
            live: '#',
            color: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
        },
        {
            title: 'Project Gamma',
            description: 'Task management dashboard with drag-and-drop functionality. Built to help teams organize workflows efficiently.',
            technologies: ['Vue.js', 'Firebase', 'Tailwind'],
            github: '#',
            live: '#',
            color: 'linear-gradient(135deg, #f59e0b, #ef4444)'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }} // Reveal slightly before it enters fully
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-thumbnail" style={{ background: project.color }}>
                                <div className="overlay">
                                    <motion.a
                                        whileHover={{ scale: 1.2 }}
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.2 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                    </motion.a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
