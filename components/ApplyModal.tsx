"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type ApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobId: number;
};

export default function ApplyModal({
  isOpen,
  onClose,
  jobId,
}: ApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    const appliedJobs = JSON.parse(
      localStorage.getItem("appliedJobs") || "[]"
    );

    if (appliedJobs.includes(jobId)) {
      toast.error("⚠️ You have already applied for this position.");
      return;
    }

    appliedJobs.push(jobId);

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(appliedJobs)
    );

    toast.success(
      "🎉 Application submitted successfully!"
    );

    setName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
    setResume(null);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl font-bold text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center text-blue-600">
          Apply for this Job
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Fill in your details below
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="font-medium">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3 mt-2"
              placeholder="John Doe"
            />

          </div>

          <div>

            <label className="font-medium">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3 mt-2"
              placeholder="john@gmail.com"
            />

          </div>

          <div>

            <label className="font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3 mt-2"
              placeholder="+91 9876543210"
            />

          </div>

          <div>

            <label className="font-medium">
              Upload Resume
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setResume(
                  e.target.files?.[0] || null
                )
              }
              className="w-full border rounded-lg px-4 py-3 mt-2"
            />

          </div>

          <div>

            <label className="font-medium">
              Cover Letter
            </label>

            <textarea
              rows={4}
              value={coverLetter}
              onChange={(e) =>
                setCoverLetter(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3 mt-2"
              placeholder="Write a short cover letter..."
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>
  );
}