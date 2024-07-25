import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Logo width="100px" />
              <span className="ml-2 text-sm">
                Connecting you with the world.
              </span>
            </div>
            <p className="text-sm text-gray-400">
              &copy; Copyright 2024. All Rights Reserved by CoderXYZ1404.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Company</h3>
            <nav className="space-y-2">
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Features
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Pricing
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Affiliate Program
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Press Kit
              </Link>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Support</h3>
            <nav className="space-y-2">
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Account
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Help
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Contact Us
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Customer Support
              </Link>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Legals</h3>
            <nav className="space-y-2">
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Terms &amp; Conditions
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gray-100 block">
                Licensing
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
