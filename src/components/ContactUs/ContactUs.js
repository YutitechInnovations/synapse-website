"use client";
import React, { useState } from "react";
import axios from "../../network/index.js";
import { handleToast } from "../../network/helper.js";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await axios.post("/user/contact", formData);
      
      handleToast({
        res: response.data,
        next: () => {
          // Reset form on successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      });
    } catch (error) {
      handleToast({ err: error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>
          Get in touch with our team for any questions, support, or partnership inquiries.
        </p>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Get in Touch</h3>
            <p className={styles.infoDescription}>
              We're here to help you with any questions about our orthodontic solutions, 
              technical support, or partnership opportunities.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h4 className={styles.methodTitle}>Email</h4>
                  <p className={styles.methodValue}>support@synapsehealthtech.in</p>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.icon}>📱</div>
                <div>
                  <h4 className={styles.methodTitle}>Toll Free Number</h4>
                  <p className={styles.methodValue}>1800 202 3282</p>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.icon}>🏢</div>
                <div>
                  <h4 className={styles.methodTitle}>Corporate Office</h4>
                  <p className={styles.methodValue}>
                    No.10, Flex CoWorks, 2nd Floor, 71, 15th Cross Road,<br />
                    Sarakki Industrial Layout, J P Nagar 3rd phase,<br />
                    Bangalore – 560078, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="5"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 