import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with logo, tagline, and copyright */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <Logo width="100px" />
          <span className="ml-2 text-sm">Connecting you with the world.</span>
        </div>
        <p className="text-sm text-center text-gray-400">
          &copy; Copyright 2024. All Rights Reserved by CoderXYZ1404.
        </p>
      </div>

      {/* Bottom section with navigation links */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-evenly">
            {/* Company */}
            <div className="w-full sm:w-auto sm:mr-6 mb-4">
              <h3 className="text-xs font-semibold uppercase mb-2 text-gray-400">
                Company
              </h3>
              <nav>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Features
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Pricing
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Affiliate Program
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Press Kit
                </Link>
              </nav>
            </div>

            {/* Support */}
            <div className="w-full sm:w-auto sm:mr-6 mb-4">
              <h3 className="text-xs font-semibold uppercase mb-2 text-gray-400">
                Support
              </h3>
              <nav>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Account
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Help
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Customer Support
                </Link>
              </nav>
            </div>

            {/* Legals */}
            <div className="w-full sm:w-auto sm:mr-6 mb-4">
              <h3 className="text-xs font-semibold uppercase mb-2 text-gray-400">
                Legals
              </h3>
              <nav>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 block mb-2"
                >
                  Licensing
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
