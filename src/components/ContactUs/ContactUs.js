"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import axios from "../../network/index.js";
import { handleToast } from "../../network/helper.js";
import { useLoader } from "@/context/LoaderContext";
import styles from "./ContactUs.module.css";
import PrivacyPolicyModal from "./PrivacyPolicyModal.js";

const personaOptions = [
  "I am an orthodontist",
  "I am a general dentist",
  "I am a dental clinic staff member",
  "I am a current BioSmart patient",
  "I am a parent/guardian of a patient",
  "I am considering treatment for myself",
  "I am exploring treatment for my child or family member",
  "I represent a dental organization or DSO",
  "I am interested in business or partnership opportunities",
  "Other (Please Specify)"
];

export default function ContactUs() {
  const router = useRouter();
  const { withLoader } = useLoader();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    persona: "",
    message: "",
  });
  const [otherPersona, setOtherPersona] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePersonaChange = (value) => {
    setFormData(prev => ({
      ...prev,
      persona: value
    }));
    if (value !== "Other (Please Specify)") {
      setOtherPersona("");
    }
  };

  const handleOtherPersonaChange = (e) => {
    setOtherPersona(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    router.push('/terms-conditions');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.persona) {
      handleToast({
        err: {
          response: {
            data: {
              message: "Please select your profession/persona to submit the form."
            }
          }
        }
      });
      return;
    }
    if (formData.persona === "Other (Please Specify)" && !otherPersona.trim()) {
      handleToast({
        err: {
          response: {
            data: {
              message: "Please specify your profession/persona."
            }
          }
        }
      });
      return;
    }
    if (!acceptTerms) {
      handleToast({
        err: {
          response: {
            data: {
              message: "Please accept the terms and conditions to submit the form."
            }
          }
        }
      });
      return;
    }
    try {
      await withLoader(async () => {
        const payload = {
          ...formData,
          persona:
            formData.persona === "Other (Please Specify)"
              ? `Other: ${otherPersona}`
              : formData.persona,
        };
        const response = await axios.post("/user/contact", payload);
        handleToast({
          res: response.data,
          next: () => {
            setFormData({
              name: "",
              email: "",
              subject: "",
              persona: "",
              message: "",
            });
            setOtherPersona("");
            setAcceptTerms(false);
          }
        });
      }, "Sending your message...");
    } catch (error) {
      handleToast({ err: error });
    }
  };

  return (
    <section id="contact-us" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>
          Get in touch with our team for any questions, support, or partnership inquiries.
        </p>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Get in Touch</h3>
            <p className={styles.infoDescription}>
              We&apos;re here to help you with any questions about our orthodontic solutions, 
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
                <label className={styles.label}>Which of the following best describes you? *</label>
                <Listbox value={formData.persona} onChange={handlePersonaChange}>
                  <div className={styles.listboxContainer}>
                    <Listbox.Button className={styles.listboxButton}>
                      <span className={styles.listboxButtonText}>
                        {formData.persona || "Select your profession/persona"}
                      </span>
                      <ChevronUpDownIcon
                        className={styles.listboxIcon}
                        aria-hidden="true"
                      />
                    </Listbox.Button>
                    <Listbox.Options className={styles.listboxOptions}>
                      {personaOptions.map((persona, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `${styles.listboxOption} ${active ? styles.listboxOptionActive : ''}`
                          }
                          value={persona}
                        >
                          {({ selected }) => (
                            <>
                              <span className={styles.listboxOptionText}>
                                {persona}
                              </span>
                              {selected && (
                                <CheckIcon className={styles.listboxCheckIcon} aria-hidden="true" />
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
              {formData.persona === "Other (Please Specify)" && (
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="otherPersona">Please specify *</label>
                  <input
                    type="text"
                    id="otherPersona"
                    name="otherPersona"
                    value={otherPersona}
                    onChange={handleOtherPersonaChange}
                    className={styles.input}
                    required
                  />
                </div>
              )}
              
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
                disabled={!acceptTerms || !formData.persona || (formData.persona === "Other (Please Specify)" && !otherPersona.trim())}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </section>
  );
} 