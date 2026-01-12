"use client";
import React, { useState } from "react";
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import styles from "../../../components/ContactUs/ContactUs.module.css";
import PrivacyPolicyModal from "../../../components/ContactUs/PrivacyPolicyModal";
import Navbar from "../../../components/Navbar/Navbar";
import { submitSupportRequest } from "../../../services/support";
import { handleToast } from "../../../network/helper";

const categoryOptions = [
  "Clinical Support",
  "Case & Orders",
  "Partnership",
  "Training & Feedback",
  "Patient Support"
];

const subjectOptions = {
  "Clinical Support": [
    "Treatment Planning",
    "BioSmart SM™ Protocol",
    "Case Revisions",
    "Retainer Requests",
    "Report a Case Issue"
  ],
  "Case & Orders": [
    "Submit New Case",
    "Track Case Status",
    "Replacement Aligners",
    "Bulk Order Inquiry",
    "Upload/Rx Form Help"
  ],
  "Partnership": [
    "Join BioSmart™ Network",
    "ClearForms™ OEM Inquiry",
    "Marketing Material Request",
    "Schedule a Demo",
    "DSO Onboarding"
  ],
  "Training & Feedback": [
    "Webinars & Training",
    "1:1 Clinical Support",
    "Share Product Feedback",
    "Report Tech Issue",
    "Case Study Participation"
  ],
  "Patient Support": [
    "Escalate Patient Concern",
    "Pause or Modify Case",
    "General Inquiry"
  ]
};

export default function OrthodontistSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData(prev => ({
      ...prev,
      category: value,
      subject: ""
    }));
  };

  const handleSubjectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enhanced validation
    const errors = [];
    
    if (!formData.name?.trim()) {
      errors.push("Full name is required");
    }
    
    if (!formData.email?.trim()) {
      errors.push("Email address is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    if (!formData.phone?.trim()) {
      errors.push("Phone number is required");
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.push("Please enter a valid phone number");
    }
    
    if (!formData.category?.trim()) {
      errors.push("Category is required");
    }
    
    if (!formData.subject?.trim()) {
      errors.push("Subject is required");
    }
    
    if (!formData.message?.trim()) {
      errors.push("Message is required");
    } else if (formData.message.trim().length < 5) {
      errors.push("Message must be at least 5 characters long");
    }
    
    if (!acceptTerms) {
      errors.push("Please accept the privacy policy");
    }
    
    if (errors.length > 0) {
      handleToast({ 
        err: { 
          response: { 
            data: { message: errors.join(", ") },
            status: 400 
          } 
        } 
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the data for the API with proper trimming
      const supportData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        category: formData.category.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await submitSupportRequest(supportData);
      
      // Handle success
      handleToast({ 
        res: { message: "Support request submitted successfully! We'll get back to you soon." },
        next: () => {
          // Reset form on success
          setFormData({
            name: "",
            email: "",
            phone: "",
            category: "",
            subject: "",
            message: "",
          });
          setAcceptTerms(false);
        }
      });
    } catch (error) {
      console.error("Support request error:", error);
      // Handle error - pass the actual error object
      handleToast({ err: error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className={styles.section + ' ' + styles.withNavbarOffset}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Orthodontist Support</h2>
          <p className={styles.subheading}>
            Reach out for clinical, case, partnership, training, or patient support.
          </p>
          <div className={styles.content}>
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>Get in Touch &amp; Form Guide</h3>
              <p className={styles.infoDescription}>
                Please fill out the form to connect with our support team. Here’s how to complete each field:
              </p>
              <ul style={{marginBottom: '1.5rem', paddingLeft: '1.2em'}}>
                <li><b>Full Name, Email, Phone:</b> Enter your accurate contact details so we can reach you.</li>
                <li><b>Category:</b> Select the main area of your inquiry (e.g., Clinical Support, Case & Orders, etc.).</li>
                <li><b>Subject:</b> After choosing a category, select the specific topic that best matches your request.</li>
                <li><b>Message:</b> Provide detailed information about your question or issue to help us assist you efficiently.</li>
                <li><b>Privacy Policy:</b> Please review and accept our privacy policy before submitting.</li>
              </ul>
              <div>
                <b>Tips:</b>
                <ul style={{marginTop: '0.5em', paddingLeft: '1.2em'}}>
                  <li>If you’re unsure which category to select, choose the one that most closely matches your concern.</li>
                  <li>For urgent clinical or patient issues, select the appropriate support category for faster assistance.</li>
                </ul>
              </div>
            </div>
            <div className={styles.formContainer} style={{ margin: '0 auto', width: '100%' }}>
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
                  <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Category *</label>
                  <Listbox value={formData.category} onChange={handleCategoryChange}>
                    <div className={styles.listboxContainer}>
                      <Listbox.Button className={styles.listboxButton}>
                        <span className={styles.listboxButtonText}>
                          {formData.category || "Select category"}
                        </span>
                        <ChevronUpDownIcon className={styles.listboxIcon} aria-hidden="true" />
                      </Listbox.Button>
                      <Listbox.Options className={styles.listboxOptions}>
                        {categoryOptions.map((cat, idx) => (
                          <Listbox.Option
                            key={idx}
                            className={({ active }) => `${styles.listboxOption} ${active ? styles.listboxOptionActive : ''}`}
                            value={cat}
                          >
                            {({ selected }) => (
                              <>
                                <span className={styles.listboxOptionText}>{cat}</span>
                                {selected && <CheckIcon className={styles.listboxCheckIcon} aria-hidden="true" />}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject *</label>
                  <Listbox value={formData.subject} onChange={handleSubjectChange} disabled={!formData.category}>
                    <div className={styles.listboxContainer}>
                      <Listbox.Button className={styles.listboxButton} disabled={!formData.category}>
                        <span className={styles.listboxButtonText}>
                          {formData.subject || (formData.category ? "Select subject" : "Select category first")}
                        </span>
                        <ChevronUpDownIcon className={styles.listboxIcon} aria-hidden="true" />
                      </Listbox.Button>
                      <Listbox.Options className={styles.listboxOptions}>
                        {(subjectOptions[formData.category] || []).map((subj, idx) => (
                          <Listbox.Option
                            key={idx}
                            className={({ active }) => `${styles.listboxOption} ${active ? styles.listboxOptionActive : ''}`}
                            value={subj}
                          >
                            {({ selected }) => (
                              <>
                                <span className={styles.listboxOptionText}>{subj}</span>
                                {selected && <CheckIcon className={styles.listboxCheckIcon} aria-hidden="true" />}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
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
                <div className={styles.termsContainer}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={handleCheckboxChange}
                      className={styles.checkbox}
                      required
                    />
                    <span className={styles.checkboxText}>
                      I accept the{" "}
                      <a
                        href="#"
                        onClick={e => { e.preventDefault(); setIsPrivacyModalOpen(true); }}
                        className={styles.termsLink}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={
                    !acceptTerms ||
                    !formData.name ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.category ||
                    !formData.subject ||
                    !formData.message ||
                    isSubmitting
                  }
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
} 