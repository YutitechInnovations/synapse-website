import Image from "next/image";
import React, { useState } from "react";

const ModalWithComments = ({ isOpen, onClose, comments = [], onPostComment }) => {
    const [newComment, setNewComment] = useState("");

    const handlePost = async () => {
        if (newComment.trim()) {
            await onPostComment(newComment.trim());
            setNewComment(""); // Clear textarea
        }
    };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Add a Comment</h2>
                    <button onClick={onClose} className="text-gray-500 cursor-pointer hover:text-black text-xl font-bold">&times;</button>
                </div>

                <textarea
                    className="w-full border rounded-md p-2 h-32 resize-none"
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />

                <button
                    className="mt-3 w-full bg-[#004c44] text-white py-2 rounded "
                    onClick={handlePost}
                >
                    Post Comment
                </button>

                <hr className="my-4" />

                <h3 className="text-lg font-medium mb-2">Previous Comments</h3>
                <ul className="space-y-2 max-h-70 overflow-y-auto">
                    {comments?.data?.length === 0 ? (
                        <li className="text-gray-500 italic">No comments yet.</li>
                    ) : (
                        comments?.data?.map((comment) => (
                            <li
                                key={comment.comment_id}
                                className="p-3 bg-gray-100 rounded-md flex space-x-3 items-start"
                            >
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    {comment?.user_details?.avatar ? (
                                        <Image
                                            src={comment.user_details.avatar}
                                            alt={comment.user_details.full_name}
                                            className="w-10 h-10 rounded-full object-cover"
                                            height={10}
                                            width={10}
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold uppercase">
                                            {comment?.user_details?.full_name?.[0] || "U"}
                                        </div>
                                    )}
                                </div>

                                {/* Comment content */}
                                <div>
                                    <div className="text-sm font-semibold text-gray-800">
                                        {comment.user_details?.full_name || "Unknown User"}
                                    </div>
                                    <div className="text-gray-700 mt-1 whitespace-pre-wrap">
                                        {comment.comment_text}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">
                                        {new Date(comment.created_at).toLocaleString(undefined, {
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                        })}
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

            </div>
        </div>
    );
};

export default ModalWithComments;
