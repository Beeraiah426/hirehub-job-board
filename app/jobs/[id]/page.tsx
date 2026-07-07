import { jobs } from "@/data/jobs";
import Link from "next/link";
import ApplyButton from "@/components/ApplyButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetails({ params }: Props) {
  const { id } = await params;

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">
          Job Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-10">

      {/* Back Button */}
      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Company */}
      <div className="mt-8">
        <h2 className="text-2xl text-blue-600 font-semibold">
          {job.company}
        </h2>

        <h1 className="text-5xl font-bold mt-2">
          {job.title}
        </h1>
      </div>

      {/* Job Information */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 bg-gray-100 p-6 rounded-xl">

        <p>
          <strong>📍 Location:</strong> {job.location}
        </p>

        <p>
          <strong>💰 Salary:</strong> {job.salary}
        </p>

        <p>
          <strong>💼 Job Type:</strong> {job.type}
        </p>

        <p>
          <strong>⭐ Experience:</strong> {job.experience}
        </p>

      </div>

      {/* Description */}
      <section className="mt-10">

        <h2 className="text-3xl font-bold mb-4">
          Job Description
        </h2>

        <p className="text-gray-700 leading-8">
          {job.description}
        </p>

      </section>

      {/* Responsibilities */}
      <section className="mt-10">

        <h2 className="text-3xl font-bold mb-4">
          Responsibilities
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {job.responsibilities.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}

        </ul>

      </section>

      {/* Skills */}
      <section className="mt-10">

        <h2 className="text-3xl font-bold mb-4">
          Required Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

      {/* Apply Button */}
      <ApplyButton jobId={job.id} />

    </main>
  );
}