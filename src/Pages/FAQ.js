import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Poeage Group of Companies?",
    answer:
      "Poeage Group of Companies is a diversified business group offering services across software development, civil engineering, job consultancy, cloud services, and IT solutions through its specialized subsidiary companies.",
  },
  {
    question: "Which companies operate under Poeage Group?",
    answer:
      "Poeage Group operates Poeage Technologies, Poeage Builders, Poeage Nexus, Poeage Web Services, and Poeage IT Solutions.",
  },
  {
    question:
      "Does Poeage Group provide services directly or through its companies?",
    answer:
      "Services are delivered through individual Poeage companies, each specializing in its respective industry.",
  },
  {
    question: "How can I contact Poeage Group?",
    answer:
      "You can contact Poeage Group through the Contact Us page or official enquiry channels.",
  },
];



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
                >
                  <span className="pr-4">{faq.question}</span>

                  {/* Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-blue-600 text-xl font-medium"
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
