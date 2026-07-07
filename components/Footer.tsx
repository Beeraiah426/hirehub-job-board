import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-gray-300 mt-2">

      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <h2 className="text-3xl font-bold text-white">
            HireHub
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Find your dream job from thousands of verified opportunities.
            HireHub connects talented professionals with top companies
            across the globe.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <a href="#featured-jobs" className="hover:text-blue-400 transition">
                Jobs
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Companies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>

          </ul>

        </div>

        {/* Resources */}

        <div>

          <h3 className="text-white font-semibold text-lg mb-4">
            Resources
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Career Tips
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Resume Builder
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Interview Preparation
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                FAQ
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-white font-semibold text-lg mb-4">
            Contact
          </h3>

          <p className="mb-3">
            📧 support@hirehub.com
          </p>

          <p className="mb-3">
            📞 +91 98765 43210
          </p>

          <p className="mb-6">
            📍 Hyderabad, India
          </p>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:support@hirehub.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} HireHub. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with ❤️ using Next.js, TypeScript & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  );
}