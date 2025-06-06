import React, { useState } from "react";

const ModalWithComments = ({ isOpen, onClose, comments = [], onPostComment }) => {
    const [newComment, setNewComment] = useState("");

    const handlePost = () => {
        if (newComment.trim()) {
            onPostComment(newComment.trim());
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
                <ul className="space-y-2 max-h-40 overflow-y-auto">
                    {comments.length === 0 ? (
                        <li className="text-gray-500">No comments yet.</li>
                    ) : (
                        comments.map((comment, index) => (
                            <li key={index} className="p-2 bg-gray-100 rounded-md">
                                {comment}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ModalWithComments;
