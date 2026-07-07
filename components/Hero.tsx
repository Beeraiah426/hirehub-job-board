"use client";

import {
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function Hero() {
  const scrollToJobs = () => {
    const section = document.getElementById("featured-jobs");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    const section = document.getElementById("about-hirehub");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

              🚀 #1 Job Portal

            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight whitespace-nowrap">

              Find Your{" "}

              <span className="text-yellow-300">
                Dream Job
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-8">

              Discover thousands of job opportunities from the world's top
              companies. Search by skills, company, location and apply in
              just one click.

            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={scrollToJobs}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-lg transition"
              >
                💼 Browse Jobs
              </button>

              <button
                onClick={scrollToAbout}
                className="border border-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg transition"
              >
                ℹ️ Learn More
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Active Jobs */}

            <div className="bg-white rounded-xl shadow-xl p-5 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center">

                <FaBriefcase className="text-2xl text-blue-600" />

              </div>

              <h2 className="text-3xl font-bold text-blue-600 mt-4">
                5K+
              </h2>

              <p className="text-gray-600 mt-2">
                Active Jobs
              </p>

            </div>

            {/* Companies */}

            <div className="bg-white rounded-xl shadow-xl p-5 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">

                <FaBuilding className="text-2xl text-green-600" />

              </div>

              <h2 className="text-3xl font-bold text-green-600 mt-4">
                300+
              </h2>

              <p className="text-gray-600 mt-2">
                Companies
              </p>

            </div>

            {/* Candidates */}

            <div className="bg-white rounded-xl shadow-xl p-5 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 flex items-center justify-center">

                <FaUsers className="text-2xl text-purple-600" />

              </div>

              <h2 className="text-3xl font-bold text-purple-600 mt-4">
                15K+
              </h2>

              <p className="text-gray-600 mt-2">
                Candidates
              </p>

            </div>

            {/* Success Rate */}

            <div className="bg-white rounded-xl shadow-xl p-5 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">

                <FaChartLine className="text-2xl text-red-600" />

              </div>

              <h2 className="text-3xl font-bold text-red-600 mt-4">
                98%
              </h2>

              <p className="text-gray-600 mt-2">
                Success Rate
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}