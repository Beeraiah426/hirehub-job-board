"use client";

import { useEffect, useState } from "react";
import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard";

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSavedJobs(saved);
  }, []);

  const filteredJobs = jobs.filter((job) =>
    savedJobs.includes(job.id)
  );

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-7xl mx-auto">

    <a className="text-blue-600 hover:underline" href="/">← Back to Home</a>

        <h1 className="text-4xl font-bold text-center mb-4">
          ❤️ Saved Jobs
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Your favourite opportunities in one place.
        </p>

        {filteredJobs.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold">
              No Saved Jobs
            </h2>

            <p className="mt-4 text-gray-500">
              Save jobs from the homepage and they'll appear here.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredJobs.map((job) => (

              <JobCard
                key={job.id}
                id={job.id}
                company={job.company}
                title={job.title}
                location={job.location}
                salary={job.salary}
                type={job.type}
                experience={job.experience}
                skills={job.skills}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}