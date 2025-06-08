import React, { useState } from "react";
import Image from "next/image";
import { updateTestimonialStatus } from "@/services/alignMasters";
import toast from "react-hot-toast";

const TestimonialCard = ({ item, onLike, onComment, styles = {}, isAdmin, onAction }) => {

    const [loading, setLoading] = useState(false)



    const handleApprove = async (id, status) => {
        try {
            setLoading(true)
            const resp = await updateTestimonialStatus(id, status);
            console.log("Status updated:", resp);
            toast.success('Status updated')
            onAction()
            // Optionally update UI or show success message here
        } catch (error) {
            console.error("Error updating status:", error.message);
            toast.error('Error updating status')
            // Show error message to user
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <>

            <div key={item?.testimonial_id} className={styles.card}>
                <div className={styles.cardHeader}>
                    <Image
                        src={item?.avatar || "/images/doc.jpg"}
                        alt={item?.author_name || "Doctor Avatar"}
                        width={56}
                        height={56}
                        className={styles.avatar}
                    />
                    <div className={styles.cardHeaderText}>
                        <span className={styles.cardName}>
                            {item?.author_name || "Dr Harmeet Kour"}
                        </span>
                        <span className={styles.cardRoleDate}>
                            {item?.position || "Manager, Clinical & Education"} &bull;{" "}
                            <span className={styles.cardDate}>
                                {item?.created_at &&
                                    new Date(item.created_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </span>
                        </span>
                    </div>
                </div>

                <div className={styles.cardContent}>{item?.testimonial_text}</div>

                {item?.files?.map((file) => {
                    const url = file?.file_url || "";

                    const getFileExtension = (url) => {
                        try {
                            const pathname = new URL(url).pathname;
                            const filename = pathname.split("/").pop();
                            return filename.split(".").pop().toLowerCase();
                        } catch {
                            return "";
                        }
                    };

                    const ext = getFileExtension(url);

                    const isImage = [
                        "jpg",
                        "jpeg",
                        "png",
                        "webp",
                        "gif",
                        "bmp",
                        "svg",
                    ].includes(ext);
                    const isVideo = ["mp4", "webm", "ogg", "mov", "avi"].includes(ext);

                    if (isImage) {
                        return (
                            <Image
                                key={url}
                                src={url}
                                alt="Testimonial"
                                width={420}
                                height={120}
                                className={styles.cardImage}
                            />
                        );
                    } else if (isVideo) {
                        return (
                            <div
                                key={item?.testimonial_id}
                                className={styles.cardImage}
                                style={{ position: "relative" }}
                            >
                                <video
                                    width="420"
                                    height="120"
                                    controls
                                    className={styles.cardVideo}
                                    preload="metadata"
                                >
                                    <source src={url} type={`video/${ext}`} />
                                    Your browser does not support the video tag.
                                </video>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        pointerEvents: "none",
                                    }}
                                >
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                </div>
                            </div>
                        );
                    }
                })}

                {!isAdmin && (
                    <div className={styles.actionRow}>
                        <div className={styles.actionLeft}>
                            <button
                                onClick={() => onLike(item?.testimonial_id)}
                                className={styles.actionBtn}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill={item?.liked ? "#004c44" : "none"}
                                    stroke={item?.liked ? "#004c44" : "#184C3A"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 22h10a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4H5.34l1.13-5.63A2 2 0 0 0 4.5 2H4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h1v2a2 2 0 0 0 2 2z" />
                                </svg>
                                Like
                            </button>

                            <button
                                onClick={() => onComment(item?.testimonial_id)}
                                className={styles.actionBtn}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#184C3A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                Comment
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {isAdmin && (
                <div className={`m-2 flex items-center justify-end gap-12`}>
                    <div className={styles.actionLeft}>
                        <button
                            disabled={loading}
                            onClick={() => handleApprove(item?.testimonial_id, 'approved')}
                            style={{
                                backgroundColor: "#195B48",
                                color: "white",
                                border: "none",
                                padding: "8px 16px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                marginRight: "8px",
                            }}
                        >
                            Approve
                        </button>

                        <button
                            disabled={loading}
                            onClick={() => handleApprove(item?.testimonial_id, 'rejected')}
                            style={{
                                backgroundColor: "#195B48",
                                color: "white",
                                border: "none",
                                padding: "8px 16px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Reject
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default TestimonialCard;
