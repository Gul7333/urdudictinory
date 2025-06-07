// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer dir='ltr' className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About Urdu Zaban Dictionary</h3>
            <p className="text-gray-300 leading-relaxed">
              A comprehensive Urdu language dictionary where you can find word meanings, synonyms, antonyms, and usage examples.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="text-gray-300">
              Follow us on social media for the latest updates
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Urdu Zaban Dictionary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;