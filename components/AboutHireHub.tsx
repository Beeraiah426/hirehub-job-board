import {
  FaBriefcase,
  FaBuilding,
  FaBolt,
  FaUserCheck,
} from "react-icons/fa";

export default function AboutHireHub() {
  return (
    <section
      id="about-hirehub"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            About HireHub
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Why Choose HireHub?
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            HireHub is a modern job portal designed to connect talented
            professionals with top companies. Our platform makes job searching
            simple, faster and smarter with powerful search, one-click
            applications and verified opportunities.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}

          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <FaBriefcase className="text-blue-600 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Thousands of Jobs
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Discover thousands of verified job opportunities from startups,
              MNCs and leading global companies.
            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

              <FaBuilding className="text-green-600 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Trusted Companies
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Apply to opportunities from trusted employers including Google,
              Microsoft, Amazon, Deloitte, IBM, TCS and many more.
            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">

              <FaBolt className="text-yellow-500 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              One Click Apply
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Save time with our quick application process and easily keep track
              of your saved jobs and applications.
            </p>

          </div>

          {/* Card 4 */}

          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">

              <FaUserCheck className="text-purple-600 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Career Growth
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Whether you're a fresher or an experienced professional, HireHub
              helps you discover opportunities that match your skills and career
              goals.
            </p>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-12 text-center shadow-xl">

          <h2 className="text-4xl font-bold">
            Ready to Find Your Dream Job?
          </h2>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
            Join thousands of job seekers who trust HireHub to discover exciting
            opportunities from the world's leading companies. Start your career
            journey today.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("featured-jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-xl transition"
          >
            Explore Jobs
          </button>

        </div>

      </div>
    </section>
  );
}