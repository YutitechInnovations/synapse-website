import styles from './ShareExperienceModal.module.css';
import { useRef } from 'react';

export default function ShareExperienceModal({ open, onClose }) {
  const fileInputRef = useRef(null);
  if (!open) return null;
  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.heading}>Share your Experiences</h2>
        <p className={styles.subheading}>Tell the community about your experience with Synapse.</p>
        <label className={styles.label}>Your Experience</label>
        <textarea className={styles.textarea} placeholder="Type Something here...." rows={6} />
        <label className={styles.label}>Add Photos or Videos</label>
        <div className={styles.uploadBox}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*,video/*"
            capture="environment"
          />
          <button className={styles.uploadBtn} type="button" onClick={handleUploadClick}>
            <span className={styles.plus}>+</span>
          </button>
        </div>
        <button className={styles.submitBtn}>Submit Testimonial</button>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
      </div>
    </div>
  );
} 