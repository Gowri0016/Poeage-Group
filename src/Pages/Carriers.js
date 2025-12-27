import React from "react";
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
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function PoeageNexusPage() {
  return (
    <div className="bg-white text-gray-800 ">

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-24 px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Shape the Future with <span className="text-cyan-600">Poeage Group</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Connecting talent with opportunity through smart hiring solutions and
          career-driven platforms.
        </p>

        
      </motion.section>

     

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto mb-11">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-8">
            Open Positions
          </motion.h2>

          <div className="space-y-4">
            {[
              "Frontend Developer",
              "Project Manager",
              "UI/UX Designer",
              "DevOps Engineer",
            ].map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex justify-between items-center border border-gray-200 bg-white rounded-lg px-6 py-4"
              >
                <div>
                  <h4 className="font-medium">{job}</h4>
                  <p className="text-sm text-gray-500">
                    Full Time · Remote / Hybrid
                  </p>
                </div>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to bg-cyan-500 text-white rounded-md">
                  Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-6 text-center"
      >
      </motion.section>

    </div>
  );
}
