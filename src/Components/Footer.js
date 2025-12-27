import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Assets/Poeage_Logo_6.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Poeage Group Logo"
                className="w-14 h-14 object-contain"
              />
              <h3 className="font-semibold text-lg text-gray-900">
                Poeage Group’s
              </h3>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Driving innovation across technology, infrastructure, and consulting.
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="space-y-3 text-sm">
              <SocialLink href="https://www.instagram.com/" color="hover:text-pink-500">
                <FaInstagram /> Instagram
              </SocialLink>
              <SocialLink href="https://www.facebook.com/" color="hover:text-blue-600">
                <FaFacebookF /> Facebook
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/" color="hover:text-blue-700">
                <FaLinkedinIn /> LinkedIn
              </SocialLink>
            </div>
          </div>

          {/* COMPANIES */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Companies</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <FooterLink onClick={() => navigate("/poeage-technology")}>
                Poeage Technology
              </FooterLink>
              <FooterLink onClick={() => navigate("/poeage-builders")}>
                Poeage Builders
              </FooterLink>
              <FooterLink onClick={() => navigate("/poeage-nexus")}>
                Poeage Nexus
              </FooterLink>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <FooterLink onClick={() => navigate("/faq")}>FAQ</FooterLink>
              <FooterLink onClick={() => navigate("/termsandconditions")}>
                Terms & Conditions
              </FooterLink>
              <FooterLink onClick={() => navigate("/privacypolicy")}>
                Privacy Policy
              </FooterLink>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <FooterLink onClick={() => navigate("/contactus")}>
                Contact Us
              </FooterLink>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-gray-200 mt-10 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Poeage Group. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

/* ---------- Reusable Components ---------- */

const FooterLink = ({ children, onClick }) => (
  <li
    onClick={onClick}
    className="cursor-pointer hover:text-gray-900 hover:underline transition"
  >
    {children}
  </li>
);

const SocialLink = ({ href, children, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 text-gray-500 ${color} transition`}
  >
    {children}
  </a>
);
