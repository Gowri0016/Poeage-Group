import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../Assets/Poeage_Logo_6.png'

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Companies", path: "/companies" },
    { label: "About Us", path: "/aboutus" },
    { label: "Careers", path: "/carriers" },
  ];

  // 🔒 Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">

            {/* LOGO */}
            <div
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="w-16 h-16 rounded-md flex items-center justify-center">
                  <div className="w-16 h-16 rounded-md flex items-center justify-center">
                <img src={Logo} alt="Poeage Group's"></img>
              </div>
              </div>
              <span className="text-lg font-semibold text-black scroll-px-5 leading-none">
                Poeage Group's
              </span>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="h-9 px-2 flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => navigate("/contactus")}
                className="h-9 px-5 rounded-md flex items-center justify-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
              >
                Contact Us
              </button>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden h-9 w-9 flex items-center justify-center text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* MENU PANEL */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col">
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-6 text-gray-600"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className="text-left text-sm font-medium text-gray-800 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => {
                  navigate("/contactus");
                  setOpen(false);
                }}
                className="mt-4 h-10 rounded-md flex items-center justify-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
