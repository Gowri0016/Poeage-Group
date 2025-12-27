import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nexsus from "../Assets/Nexsus.png";
import Technology from "../Assets/Technology.png";
import Builders from "../Assets/Builders.png";
import Web from "../Assets/Web.png";

const categories = [
  "All Companies",
  "Technology",
  "Construction",
  "Consulting",
];

const categoryColors = {
  
  Technology: {
    tab: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
    button: "text-cyan-600 hover:text-cyan-700",
    border: "border-blue-200",
  },

  Construction: {
    tab: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
    button: "text-yellow-600 hover:text-orange-700",
    border: "border-orange-200",
  },
  Consulting: {
    tab: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
    button: "text-cyan-600 hover:text-cyan-700",
    border: "border-purple-200",
  },
  Cloud: {
    tab: "bg-gradient-to-r from-purple-500 to-blue-700 text-white",
    button: "text-purple-600 hover:text-purple-700",
    border: "border-cyan-200",
  },
  "IT Services": {
    tab: "bg-green-600 text-white",
    button: "text-green-600 hover:text-green-700",
    border: "border-green-200",
  },
};

const companies = [
  {
    name: "Poeage Technologies",
    category: "Technology",
    desc: "Software development, web & mobile solutions.",
    logo: Technology,
    website: "https://www.poeage.com/",
  },
  {
    name: "Poeage Builders",
    category: "Construction",
    desc: "Civil engineering and building contracts.",
    logo: Builders,
    website: "https://www.poeagebuilders.in/",
  },
  {
    name: "Poeage Nexus",
    category: "Consulting",
    desc: "Shape your career with us.",
    logo: Nexsus,
    website: "https://poeagenexus.com/",
  },
  {
    name: "Poeage Web Services",
    category: "Cloud",
    desc: "Cloud hosting and managed web services.",
    logo: Web,
    website: "https://poeagewebservices.com",
  },
  {
    name: "Poeage IT Solutions",
    category: "IT Services",
    desc: "Enterprise IT solutions and support.",
    logo: "/logos/poeage-it.svg",
    website: "https://poeageitsolutions.com",
  },
];

export default function OurCompaniesWhite() {
  const [active, setActive] = useState("All Companies");

  const filtered =
    active === "All Companies"
      ? companies
      : companies.filter((c) => c.category === active);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-cyan-600">Companies</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm">
            Explore our diversified group of companies delivering excellence
            across multiple industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const activeStyle =
              cat !== "All Companies" && categoryColors[cat];

            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    active === cat
                      ? activeStyle
                        ? activeStyle.tab
                        : "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((company) => {
              const color = categoryColors[company.category];

              return (
                <motion.div
                  key={company.name}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-white rounded-xl p-6 border hover:shadow-md transition
                    ${color?.border || "border-gray-200"}`}
                >
                  <div className="h-12 mb-4 flex items-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {company.name}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {company.desc}
                  </p>

                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium transition
                      ${
                        color?.button ||
                        "text-gray-600 hover:text-gray-700"
                      }`}
                  >
                    Learn More →
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
