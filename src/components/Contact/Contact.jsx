import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const promise = emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    promise
      .then(() => {
        formRef.current.reset();
        setIsSuccess(true);

        // Hide success message after 4 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message ❌");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>
              I'm currently available for freelance work and new opportunities.
              If you have a project that needs creative touches, I'd love to hear about it.
            </p>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>adhilek100@gmail.com</span>
            </div>

            <div className="info-item">
              <FaPhone className="icon" />
              <span>+91 8848717499</span>
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
              <FaPaperPlane style={{ marginLeft: "10px" }} />
            </button>

            {/* SUCCESS ANIMATION */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="success-box"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCheckCircle className="success-icon" />
                  Message sent successfully!
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
