import React from "react";
import WebApp from "../Assets/web app.webp";
import MobileApp from "../Assets/mobile app.webp";
import AIImage from "../Assets/download.jpeg";
import SoftwareImage from "../Assets/Software-Development.jpg";
import FounderImg from "../Assets/Founder.png";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[14px] text-gray-500 mb-2"
          >
            Our Career
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-[36px] font-bold text-gray-900 mb-14"
          >
            Way Of Building
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT BLUE CARD */}
            <motion.div
              variants={fadeUp}
              className="bg-blue-600 rounded-2xl p-10 grid grid-cols-2 gap-6"
            >
              <div className="bg-blue-500 rounded-xl p-6 text-white">
                <img
                  src={WebApp}
                  alt="Web App"
                  className="h-[64px] mb-4"
                />
                <h4 className="text-[18px] font-semibold">
                  Web App
                </h4>
              </div>

              <div className="bg-blue-500 rounded-xl p-6 text-white">
                <img
                  src={MobileApp}
                  alt="Mobile App"
                  className="h-[64px] mb-4"
                />
                <h4 className="text-[18px] font-semibold">
                  Mobile App
                </h4>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-gray-50 border rounded-xl p-8 text-left"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="w-[32px] h-[32px] rounded-full bg-cyan-600 text-white flex items-center justify-center text-[16px]">
                  {"</>"}
                </span>
                <h4 className="text-[20px] font-semibold text-gray-900">
                  2023 – Journey Begins
                </h4>
              </div>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                We started with Web Development & Mobile Application services,
                delivering scalable digital solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="bg-gray-50 border rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="w-[28px] h-[28px] rounded-full bg-cyan-600 text-white flex items-center justify-center text-[14px]">
                🤖
              </span>
              <h4 className="text-[20px] font-semibold text-gray-900">
                2024 – Expanding Horizons
              </h4>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Introduced AI Development and customized web & application
              solutions to address complex business challenges.
            </p>
          </motion.div>

          <motion.img
            variants={fadeUp}
            src={AIImage}
            alt="AI Development"
            className="rounded-xl shadow-lg h-[360px] object-cover"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          <motion.img
            variants={fadeUp}
            src={SoftwareImage}
            alt="Software Products"
            className="rounded-xl shadow-lg h-[360px] object-cover"
          />

          <motion.div
            variants={fadeUp}
            className="bg-gray-50 border rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="w-[28px] h-[28px] rounded-full bg-cyan-600 text-white flex items-center justify-center text-[14px]">
                💻
              </span>
              <h4 className="text-[20px] font-semibold text-gray-900">
                2025 – Software & Products
              </h4>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Transitioned into full-scale software development and launched
              Poeage Hub, an integrated digital ecosystem.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          <motion.img
            variants={fadeUp}
            src={FounderImg}
            alt="Founder"
            className="rounded-xl shadow-xl h-[420px] object-cover"
          />

          <motion.div variants={fadeUp}>
            <h4 className="text-[22px] font-semibold text-gray-900 mb-1">
              Mr. Gowrishankar
            </h4>
            <p className="text-[14px] text-cyan-600 mb-4">
              Founder & Visionary Entrepreneur
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Building technology-driven solutions focused on scalability,
              sustainability, and long-term business impact.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
