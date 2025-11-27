"use client";
import { useEffect, useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    { name: string; email: string; comment: string; date: string }[]
  >([]);

  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !comment) return;

    const newComment = {
      name,
      email,
      comment,
      date: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div dir="ltr" className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          We’d love to hear your thoughts!
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Share your comment below and join the conversation ✨
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-3 font-medium transition-colors"
          >
            Submit Comment
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Comments
          </h3>
          {comments.length === 0 ? (
            <p className="text-gray-400 text-sm">No comments yet. Be the first!</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((c, i) => (
                <li
                  key={i}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  <p className="font-semibold text-gray-800">{c.name}</p>
                  <p className="text-gray-600 mt-1">{c.comment}</p>
                  <span className="text-xs text-gray-400 block mt-2">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
