import React from "react";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function TermsCondition() {
  return (
    <section className="w-full text-gray-700">
      <motion.div
        className="max-w-5xl mx-auto px-6 py-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Terms and Conditions
        </motion.h1>

        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <motion.p variants={item}>
            These Terms and Conditions govern the use of the Poeage Group of
            Companies website and services. By accessing or using this website,
            you agree to comply with these terms.
          </motion.p>

          <motion.h2
            variants={item}
            className="text-xl font-semibold text-gray-900"
          >
            Use of Website
          </motion.h2>
          <motion.p variants={item}>
            The content provided on this website is for general informational
            purposes only. Unauthorized use, reproduction, or distribution of
            any content is strictly prohibited.
          </motion.p>

          <motion.h2
            variants={item}
            className="text-xl font-semibold text-gray-900"
          >
            Intellectual Property
          </motion.h2>
          <motion.p variants={item}>
            All content, logos, designs, text, graphics, and trademarks
            displayed on this website are the intellectual property of Poeage
            Group of Companies unless stated otherwise.
          </motion.p>

          <motion.h2
            variants={item}
            className="text-xl font-semibold text-gray-900"
          >
            Limitation of Liability
          </motion.h2>
          <motion.p variants={item}>
            Poeage Group shall not be held liable for any direct, indirect, or
            incidental damages arising from the use or inability to use this
            website or its services.
          </motion.p>

          <motion.h2
            variants={item}
            className="text-xl font-semibold text-gray-900"
          >
            Third-Party Links
          </motion.h2>
          <motion.p variants={item}>
            This website may contain links to third-party websites. Poeage Group
            is not responsible for the content or privacy practices of such
            external sites.
          </motion.p>

          <motion.h2
            variants={item}
            className="text-xl font-semibold text-gray-900"
          >
            Modifications
          </motion.h2>
          <motion.p variants={item}>
            Poeage Group of Companies reserves the right to modify these Terms
            and Conditions at any time without prior notice.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
