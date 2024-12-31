import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Blinkit</h2>
            <p className="text-sm">
              Your one-stop destination for grocery shopping. Fast delivery,
              fresh products, and amazing offers!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-700">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-700">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-sm">Email: support@blinkit.com</p>
            <p className="text-sm">Phone: +91 12345 67890</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-black hover:text-gray-700"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-black hover:text-gray-700"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-black hover:text-gray-700"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Blinkit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
