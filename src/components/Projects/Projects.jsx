import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { 
    FaExternalLinkAlt, 
    FaGithub, 
    FaCheck, 
    FaShoppingCart, 
    FaChartLine, 
    FaHeadset, 
    FaRocket, 
    FaLock,
    FaArrowRight,
    FaLayerGroup
} from 'react-icons/fa';
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiExpress, 
    SiTailwindcss, 
    SiJavascript, 
    SiVite,
    SiSocketdotio 
} from 'react-icons/si';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 'yumnest',
            title: 'Yum Nest',
            tagline: 'Artisanal Spice & Gourmet Food E-Commerce Platform',
            category: 'ecommerce',
            badge: 'Live Production • Client Project',
            badgeType: 'emerald',
            featured: true,
            liveUrl: 'https://yumnest.in/',
            githubUrl: null,
            domain: 'yumnest.in',
            description: 'Engineered a modern, high-converting e-commerce storefront for an authentic Kerala spice brand featuring their Signature Collection (including restaurant-style Broast Masala Powder). Designed with an emphasis on lightning-fast product discovery, buttery-smooth cart interactions, and a frictionless mobile checkout flow.',
            highlights: [
                'Production storefront with sub-second page transitions',
                'Seamless shopping cart & streamlined checkout workflow',
                'Custom responsive UI tailored for high food-brand conversion',
                'Optimized asset delivery ensuring low Core Web Vitals latency'
            ],
            technologies: [
                { name: 'React.js', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Modern CSS', icon: <SiTailwindcss /> },
                { name: 'REST APIs', icon: <FaRocket /> }
            ],
            mockup: {
                theme: 'amber',
                tag: 'Signature Broast Masala',
                price: '₹249',
                rating: '★ 4.9 (500+ reviews)',
                subtitle: 'Restaurant-Style Crunch & Authentic Flavor',
                pills: ['100% Pure Blend', 'Fast Shipping', 'Secure Checkout']
            }
        },
        {
            id: 'adlynx',
            title: 'Adlynx',
            tagline: 'Performance Marketing Analytics & Client Reporting Suite',
            category: 'saas',
            badge: 'Live SaaS • Production',
            badgeType: 'cyan',
            featured: true,
            liveUrl: 'https://adlynx.online/',
            githubUrl: null,
            domain: 'adlynx.online',
            description: 'Architected an all-in-one digital marketing intelligence dashboard purpose-built for marketing agencies and media buyers. Aggregates multi-channel ad performance across Meta and Google Ads, supports custom CSV conversion uploads for offline leads, and synthesizes automated AI performance summaries.',
            highlights: [
                'Unified Meta & Google Ads cross-channel performance analytics',
                'AI-driven executive summaries delivering instant campaign takeaways',
                'Offline conversion & custom leads ingestion via CSV upload',
                'Interactive ROAS, CAC, spend attribution & conversion visualizers'
            ],
            technologies: [
                { name: 'React.js', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'Analytics APIs', icon: <FaChartLine /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'Data Visualizers', icon: <FaRocket /> }
            ],
            mockup: {
                theme: 'cyan',
                tag: 'Agency ROI Dashboard',
                metric1: 'Total Spend: $42,850',
                metric2: 'ROAS: 4.8x (+24%)',
                aiNote: 'AI Insight: Campaign A delivered highest conversion volume at $14.20 CPA',
                pills: ['Meta Ads API', 'Google Ads', 'CSV Ingestion']
            }
        },
        {
            id: 'helpdesk',
            title: 'HelpDesk Support Suite',
            tagline: 'Real-Time Customer Support & Ticket Dispatch System',
            category: 'webapp',
            badge: 'Full-Stack Application',
            badgeType: 'indigo',
            featured: false,
            liveUrl: 'https://help-desk-support.vercel.app',
            githubUrl: 'https://github.com/adhilek19/HelpDesk-Support',
            domain: 'help-desk-support.vercel.app',
            description: 'A full-stack ticket triage and real-time customer care platform built to streamline support operations. Features dynamic ticket classification, status progression workflows, priority tagging, and agent assignment dashboards.',
            highlights: [
                'Real-time ticketing triage with immediate status synchronization',
                'Categorized priority levels (Critical, High, Normal, Low)',
                'Clean agent workflow dashboard with search and filtration',
                'Deployed and optimized on Vercel with responsive mobile design'
            ],
            technologies: [
                { name: 'React.js', icon: <SiReact /> },
                { name: 'JavaScript ES6', icon: <SiJavascript /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'REST APIs', icon: <FaRocket /> }
            ],
            mockup: {
                theme: 'indigo',
                tag: 'Support Operations',
                metric1: 'Active Tickets: 24',
                metric2: 'Avg Resolution: 18m',
                aiNote: 'Priority Queue: 3 critical escalations routed to on-call agents',
                pills: ['Live Triage', 'Agent Dispatch', 'Real-time']
            }
        },
        {
            id: 'nasa',
            title: 'NASA Astronomy Explorer',
            tagline: 'Cosmic Exploration & APOD Discovery Engine',
            category: 'webapp',
            badge: 'Open API Integration',
            badgeType: 'amber',
            featured: false,
            liveUrl: null,
            githubUrl: 'https://github.com/adhilek19/-NASA-s-Astronomy-',
            domain: 'github.com/adhilek19/nasa',
            description: 'An interactive space imaging application powered by NASA Open APIs. Allows stargazers and science enthusiasts to query daily celestial discoveries, explore high-resolution astronomical photography, and discover what space looked like on specific calendar dates.',
            highlights: [
                'Direct integration with NASA Astronomy Picture of the Day (APOD) API',
                'Date-picker query engine to travel back in cosmic history',
                'Responsive imagery viewer with high-resolution modal inspection',
                'Lightweight, zero-dependency client with smooth animations'
            ],
            technologies: [
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'NASA API', icon: <FaRocket /> },
                { name: 'CSS Grid', icon: <SiTailwindcss /> },
                { name: 'HTML5', icon: <SiReact /> }
            ],
            mockup: {
                theme: 'purple',
                tag: 'NASA Open API',
                metric1: 'Cosmic Archives: 25+ Yrs',
                metric2: 'High-Res APOD Stream',
                aiNote: 'Exploring deep space imagery, nebulae, and stellar nurseries',
                pills: ['NASA APOD', 'Cosmic Queries', 'HD Visuals']
            }
        }
    ];

    const filterOptions = [
        { key: 'all', label: 'All Projects' },
        { key: 'featured', label: 'Featured Production ⚡' },
        { key: 'saas', label: 'SaaS & Analytics' },
        { key: 'ecommerce', label: 'E-Commerce' },
        { key: 'webapp', label: 'Web Applications' }
    ];

    const filteredProjects = projects.filter(p => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'featured') return p.featured;
        return p.category === activeFilter;
    });

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">
                        <FaLayerGroup /> Featured Engineering Work
                    </span>
                    <h2 className="section-title">Production Systems & Case Studies</h2>
                    <p className="section-subtitle">
                        Real-world client applications, high-traffic e-commerce systems, and data-rich SaaS platforms built with cutting-edge frontend and MERN architecture.
                    </p>

                    {/* Filter Tabs */}
                    <div className="project-filters">
                        {filterOptions.map(f => (
                            <button
                                key={f.key}
                                className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-container">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                className={`project-showcase ${project.featured ? 'featured-card' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Left Side: Mockup Browser Chrome Window */}
                                <div className={`project-preview preview-${project.mockup.theme}`}>
                                    <div className="browser-chrome">
                                        <div className="chrome-dots">
                                            <span className="dot red"></span>
                                            <span className="dot yellow"></span>
                                            <span className="dot green"></span>
                                        </div>
                                        <div className="chrome-url">
                                            <FaLock className="lock-icon" />
                                            <span>https://{project.domain}</span>
                                        </div>
                                        {project.liveUrl && (
                                            <div className="live-indicator">
                                                <span className="pulse-dot"></span>
                                                <span>LIVE</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Visual Representation Graphic */}
                                    <div className="mockup-canvas">
                                        <div className="mockup-glow"></div>
                                        
                                        {project.id === 'yumnest' && (
                                            <div className="yumnest-mockup">
                                                <div className="mockup-header-row">
                                                    <div className="mockup-brand">YUM NEST</div>
                                                    <div className="mockup-cart-badge">
                                                        <FaShoppingCart /> Cart (2)
                                                    </div>
                                                </div>
                                                <div className="mockup-product-card">
                                                    <div className="product-badge">Best Seller</div>
                                                    <h4>Broast Masala Powder</h4>
                                                    <p className="product-desc">Authentic Kerala Spice Blend for Restaurant-Style Crunch</p>
                                                    <div className="product-meta">
                                                        <span className="price">₹249.00</span>
                                                        <span className="rating">★ 4.9 (520)</span>
                                                    </div>
                                                    <div className="mockup-action-btn">
                                                        Add To Cart 🛒
                                                    </div>
                                                </div>
                                                <div className="mockup-tags">
                                                    <span>100% Pure Spice</span>
                                                    <span>Fast Delivery</span>
                                                    <span>Secure Razorpay</span>
                                                </div>
                                            </div>
                                        )}

                                        {project.id === 'adlynx' && (
                                            <div className="adlynx-mockup">
                                                <div className="mockup-header-row">
                                                    <div className="mockup-brand">ADLYNX • ANALYTICS</div>
                                                    <span className="live-chip">Live Sync Active</span>
                                                </div>
                                                <div className="analytics-stats-grid">
                                                    <div className="stat-card">
                                                        <span className="stat-label">Total Ad Spend</span>
                                                        <span className="stat-val">$42,850</span>
                                                        <span className="stat-growth green">+14.2%</span>
                                                    </div>
                                                    <div className="stat-card">
                                                        <span className="stat-label">Overall ROAS</span>
                                                        <span className="stat-val">4.82x</span>
                                                        <span className="stat-growth green">High ROI</span>
                                                    </div>
                                                </div>
                                                <div className="ai-insight-box">
                                                    <div className="ai-title">🤖 AI Automated Summary</div>
                                                    <p>Top performing channel: Meta Reels retargeting generated 64% of qualified conversions at $12.40 CPA.</p>
                                                </div>
                                                <div className="mockup-tags">
                                                    <span>Meta Ads API</span>
                                                    <span>Google Ads</span>
                                                    <span>CSV Uploads</span>
                                                </div>
                                            </div>
                                        )}

                                        {project.id === 'helpdesk' && (
                                            <div className="helpdesk-mockup">
                                                <div className="mockup-header-row">
                                                    <div className="mockup-brand"><FaHeadset /> SUPPORT DISPATCH</div>
                                                    <span className="live-chip">System Online</span>
                                                </div>
                                                <div className="ticket-list">
                                                    <div className="ticket-item critical">
                                                        <span className="priority-pill">HIGH</span>
                                                        <span className="ticket-text">Payment Gateway Timeout</span>
                                                        <span className="status-pill">In Progress</span>
                                                    </div>
                                                    <div className="ticket-item normal">
                                                        <span className="priority-pill normal">NORMAL</span>
                                                        <span className="ticket-text">User Auth Token Renewal</span>
                                                        <span className="status-pill resolved">Resolved</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {project.id === 'nasa' && (
                                            <div className="nasa-mockup">
                                                <div className="mockup-header-row">
                                                    <div className="mockup-brand"><FaRocket /> NASA APOD ENGINE</div>
                                                    <span className="live-chip">API Connected</span>
                                                </div>
                                                <div className="cosmos-preview">
                                                    <div className="star-field"></div>
                                                    <div className="planet-circle"></div>
                                                    <p className="cosmos-title">Deep Space Discovery Explorer</p>
                                                    <span className="date-stamp">Interactive Astronomy API</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: Project Details & Information */}
                                <div className="project-info">
                                    <div className="project-badge-row">
                                        <span className={`badge badge-${project.badgeType}`}>
                                            <span className="pulse-dot"></span>
                                            {project.badge}
                                        </span>
                                        <span className="project-category-tag">
                                            {project.category.toUpperCase()}
                                        </span>
                                    </div>

                                    <h3 className="project-name">{project.title}</h3>
                                    <h4 className="project-tagline">{project.tagline}</h4>
                                    <p className="project-desc">{project.description}</p>

                                    {/* Key Architectural Highlights */}
                                    <div className="project-highlights">
                                        <span className="highlights-title">Key Architectural Features:</span>
                                        <ul>
                                            {project.highlights.map((h, i) => (
                                                <li key={i}>
                                                    <FaCheck className="check-icon" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies Stack */}
                                    <div className="project-technologies">
                                        {project.technologies.map((t, i) => (
                                            <span key={i} className="tech-chip">
                                                <span className="tech-icon">{t.icon}</span>
                                                <span>{t.name}</span>
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTAs & External Links */}
                                    <div className="project-actions">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary"
                                            >
                                                <span>Visit Live Site</span>
                                                <FaExternalLinkAlt className="action-icon" />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary"
                                            >
                                                <FaGithub className="action-icon" />
                                                <span>View Source</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
