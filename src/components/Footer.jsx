import { Link } from "react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="_footer bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/images/millat.jpg"
                  alt="Tamirul Millat Kamil Madrasah Logo"
                  className="h-8 w-auto rounded"
                />
                <span className="ms-1.5 font-bold text-xl text-primary dark:text-white">
                  x
                </span>
                <img
                  src="/msc.png"
                  alt="Millat Science Club Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Inspiring scientific curiosity and innovation through education,
                exploration, and community engagement.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us/#team"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.tamirulmillat.com/"
                    target="_blank"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Madrasah Website
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Science Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Research Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Science News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Educational Videos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin
                    size={20}
                    className="text-primary dark:text-white mt-1 flex-shrink-0"
                  />
                  <a
                    href="https://maps.app.goo.gl/fCzX7TytWYfgueEQA"
                    target="_blank"
                  >
                    <span className="text-gray-600 dark:text-gray-400">
                      315, Mirhajirbag, Kazibari, Jatrabari, Dhaka-1204
                    </span>
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone
                    size={20}
                    className="text-primary dark:text-white flex-shrink-0"
                  />
                  <a href="tel:">
                    <span className="text-gray-600 dark:text-gray-400">
                      +1 (123) 456-7890
                    </span>
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail
                    size={20}
                    className="text-primary dark:text-white flex-shrink-0"
                  />
                  <a href="mailto:contact@mscbd.org">
                    <span className="text-gray-600 dark:text-gray-400">
                      contact@mscbd.org
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear() || "2025"} Millat Science Club. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
