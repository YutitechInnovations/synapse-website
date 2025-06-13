import styles from "./ShareExperienceModal.module.css";
import { useRef, useState } from "react";
import {
  getPresignedUrl,
  createTestimonial,
} from "../../../services/alignMasters";
import Image from "next/image";
import toast from "react-hot-toast";
import { useMutateTestimonial } from "@/hooks/useTestimonials";

export default function ShareExperienceModal({ open, onClose }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [testimonialText, setTestimonialText] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { mutate: mutateTestimonial } = useMutateTestimonial();

  if (!open) return null;

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const totalFiles = selectedFiles.length + files.length;
    if (totalFiles > 4) {
      alert("You can upload a maximum of 4 files.");
      return;
    }

    setIsUploading(true);
    const newFiles = [];

    for (const file of files) {
      try {
        const { data, key } = await getPresignedUrl(file.name);

        await fetch(data?.signed_url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        newFiles.push(data?.signed_url);
      } catch (err) {
        console.error("Upload failed for", file.name, err);
        alert(`Failed to upload file: ${file.name}`);
      }
    }

    setSelectedFiles((prev) => [...prev, ...newFiles]);
    setIsUploading(false);
  };

  const handleSubmit = async () => {
    if (!testimonialText.trim()) {
      alert("Please enter your experience.");
      return;
    }

    try {
      mutateTestimonial(
        {
          type: "create",
          payload: {
            testimonial_text: testimonialText,
            files: selectedFiles,
          },
        },
        {
          onSuccess: (res) => {
            setTestimonialText("");
            setSelectedFiles([]);
            onClose();
            console.log("Testimonial submitted:", res);
            toast.success("Thank you for sharing your experience!");
          },
          onError: (err) => {
            console.error("Error submitting testimonial:", err);
            toast.warning("Failed to submit testimonial.");
          },
        }
      );
    } catch (err) {
      console.error("Error submitting testimonial:", err);
      toast.warning("Failed to submit testimonial.");
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.heading}>Share your Experiences</h2>
        <p className={styles.subheading}>
          Tell the community about your experience with Synapse.
        </p>

        <label className={styles.label}>Your Experience</label>
        <textarea
          className={styles.textarea}
          placeholder="Type something here...."
          rows={6}
          value={testimonialText}
          onChange={(e) => setTestimonialText(e.target.value)}
        />

        <label className={styles.label}>Add Photos (Max 4)</label>
        <div className={styles.uploadBox}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".jpg,.jpeg,.png,.gif"
            multiple
            onChange={handleFileChange}
          />
          <button
            className={styles.uploadBtn}
            type="button"
            onClick={handleUploadClick}
            disabled={isUploading || selectedFiles.length >= 4}
          >
            <span className={styles.plus}>+</span>
          </button>
          {isUploading && <p>Uploading...</p>}
        </div>
        <div className={styles.previewList}>
          {selectedFiles.map((file, index) => (
            <div key={index} className={styles.previewItem}>
              <Image
                src={file}
                alt="Preview"
                width={500}
                height={500}
                style={{ height: "auto" }}
                className={`${styles.previewMedia}  aspect-auto`}
              />

              <button
                className={styles.removeBtn}
                onClick={() => handleRemoveFile(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={isUploading}
        >
          Submit Testimonial
        </button>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}
