import React from "react";
import { motion } from "framer-motion";


const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const leftCardVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightCardVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const formItemVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function GetInTouch() {
  return (
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
      className="bg-gray-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Feel free to Connect Us... We are always with you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <motion.div
            variants={leftCardVariant}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="font-semibold text-gray-900 mb-4">
              Company Details
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📍 36A, Main Road, Ayyamplayam Kavundhapadi, Erode, Tamil Nadu</p>
              <p>📞 +91 80568 89616</p>
              <p>✉ info@poeagegroups.com</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 rounded-lg overflow-hidden h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
            >
              Map Preview
            </motion.div>
          </motion.div>

          <motion.div
            variants={rightCardVariant}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h3>

            <motion.form
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08 }}
              className="space-y-4 text-sm"
            >
              <motion.div
                variants={formItemVariant}
                className="grid grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </motion.div>

              <motion.input
                variants={formItemVariant}
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.input
                variants={formItemVariant}
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.textarea
                variants={formItemVariant}
                rows="4"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.button
                variants={formItemVariant}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold py-2.5 rounded-md transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
