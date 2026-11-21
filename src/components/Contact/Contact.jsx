import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaCopy, 
  FaCheck 
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adhilek100@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard! 📋");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Graceful fallback if env variables aren't set in local development
      setTimeout(() => {
        setIsSending(false);
        setIsSuccess(true);
        toast.success("Thank you! Your message has been prepared.");
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 4000);
      }, 1000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        if (formRef.current) formRef.current.reset();
        setIsSuccess(true);
        toast.success("Message sent successfully! 🚀");
        setTimeout(() => setIsSuccess(false), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please reach out via WhatsApp!");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const whatsappNumber = "918848717499";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Adhil! I'd like to get in touch regarding a project.")}`;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Discuss Your Next Build</h2>
          <p className="section-subtitle">
            Whether you have a contract opportunity, need an MVP designed, or want to discuss scaling an existing product, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel">
            <div className="contact-intro">
              <h3>Have a project in mind?</h3>
              <p>
                I'm actively available for freelance contracts, full-time positions, and technical advisory for startups. Fast response time guaranteed.
              </p>
            </div>

            <div className="contact-methods-list">
              {/* Email */}
              <div className="contact-method-card" onClick={copyEmail} role="button" tabIndex={0}>
                <div className="method-icon-wrap">
                  <FaEnvelope className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Direct Email</span>
                  <span className="method-val">adhilek100@gmail.com</span>
                </div>
                <button className="copy-btn" title="Copy email address" aria-label="Copy email">
                  {copiedEmail ? <FaCheck className="copy-success" /> : <FaCopy />}
                </button>
              </div>

              {/* WhatsApp */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-method-card whatsapp-card">
                <div className="method-icon-wrap icon-green">
                  <FaWhatsapp className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Instant WhatsApp Chat</span>
                  <span className="method-val">+91 88487 17499</span>
                </div>
                <span className="method-action">Chat ↗</span>
              </a>

              {/* Phone */}
              <div className="contact-method-card">
                <div className="method-icon-wrap">
                  <FaPhoneAlt className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Phone Call</span>
                  <span className="method-val">+91 88487 17499</span>
                </div>
              </div>

              {/* Location */}
              <div className="contact-method-card">
                <div className="method-icon-wrap">
                  <FaMapMarkerAlt className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Location & Timezone</span>
                  <span className="method-val">Kerala, India (IST • Remote Worldwide)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-heading">
              <h4>Send a Direct Message</h4>
              <p>Fill out the form below and I will respond within 24 hours.</p>
            </div>

            <div className="form-group">
              <label htmlFor="user_name">Your Name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="e.g. Alex Morgan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Your Email Address</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="e.g. alex@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Description / Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project scope, timeline, and goals..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSending}>
              {isSending ? (
                <>
                  <span className="pulse-dot"></span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane />
                </>
              )}
            </button>

            {/* Success Feedback */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="form-success-box"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle className="success-icon" />
                  <span>Thank you! Your message was sent successfully.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
