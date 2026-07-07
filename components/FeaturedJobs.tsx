import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard";

type FeaturedJobsProps = {
  searchTerm: string;
  selectedCategory: string;
};

export default function FeaturedJobs({
  searchTerm,
  selectedCategory,
}: FeaturedJobsProps) {

  const filteredJobs = jobs.filter((job) => {

    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" ||
      job.skills.some((skill) =>
        skill.toLowerCase() === selectedCategory.toLowerCase()
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <section
    id="featured-jobs"
    className="py-4 px-10 bg-gray-50"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Jobs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
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
          ))
        ) : (
          <div className="col-span-3 text-center text-xl text-red-500">
            No Jobs Found
          </div>
        )}

      </div>

    </section>
  );
}