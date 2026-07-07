"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [savedCount, setSavedCount] = useState(0);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const updateSavedJobs = () => {
      const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs") || "[]"
      );

      setSavedCount(savedJobs.length);
    };

    updateSavedJobs();

    window.addEventListener("storage", updateSavedJobs);

    return () => {
      window.removeEventListener("storage", updateSavedJobs);
    };
  }, []);

  const navClass = (name: string) =>
    active === name
      ? "px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-md transition-all duration-300"
      : "px-5 py-2 rounded-full text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-300";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          onClick={() => setActive("Home")}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
            <FaBriefcase className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">
              Hire<span className="text-blue-600">Hub</span>
            </h1>

            <p className="text-xs text-gray-500 -mt-1">
              Find Your Dream Career
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-3 bg-gray-100 rounded-full px-2 py-2">

          {/* Home */}

          <button
            onClick={() => {
              setActive("Home");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={navClass("Home")}
          >
            Home
          </button>

          {/* Jobs */}

          <button
            onClick={() => {
              setActive("Jobs");

              document.getElementById("featured-jobs")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={navClass("Jobs")}
          >
            Jobs
          </button>

          {/* Companies */}

          <button
            onClick={() => {
              setActive("Companies");

              document.getElementById("about-hirehub")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={navClass("Companies")}
          >
            Companies
          </button>

          {/* Contact */}

          <button
            onClick={() => {
              setActive("Contact");

              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={navClass("Contact")}
          >
            Contact
          </button>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Saved Jobs */}

          <button
            onClick={() => router.push("/saved-jobs")}
            className="relative bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm"
          >
            ❤️ Saved

            {savedCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {savedCount}
              </span>
            )}

          </button>

          {/* Login */}

          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}