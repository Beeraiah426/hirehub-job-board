"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type JobProps = {
  id: number;
  company: string;
  title: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  skills?: string[];
};

export default function JobCard({
  id,
  company,
  title,
  location,
  salary,
  type,
  experience,
  skills = [],
}: JobProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSaved(savedJobs.includes(id));
  }, [id]);

  const handleSave = () => {
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");

    if (savedJobs.includes(id)) {
      savedJobs = savedJobs.filter((jobId: number) => jobId !== id);
      setSaved(false);
      toast("Removed from Saved Jobs");
    } else {
      savedJobs.push(id);
      setSaved(true);
      toast.success("Job Saved Successfully");
    }

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-6">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-blue-600 text-xl font-bold">
            {company}
          </h3>

          <h2 className="text-2xl font-semibold mt-1">
            {title}
          </h2>

        </div>

        <button
          onClick={handleSave}
          className="text-2xl hover:scale-125 transition"
        >
          {saved ? "❤️" : "🤍"}
        </button>

      </div>

      {/* Job Details */}

      <div className="mt-5 space-y-2 text-gray-600">

        <p>📍 {location}</p>

        <p>💰 {salary}</p>

        <p>💼 {type}</p>

        <p>⭐ {experience}</p>

      </div>

      {/* Skills */}

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">

          {skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>
      )}

      {/* Button */}

      <Link
        href={`/jobs/${id}`}
        className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition"
      >
        View Details →
      </Link>

    </div>
  );
}