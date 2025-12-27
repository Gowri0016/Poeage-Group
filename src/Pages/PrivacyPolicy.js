import React from "react";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-white text-gray-700">
      <motion.div
        className="max-w-5xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          variants={container}
          className="space-y-8 text-base leading-relaxed"
        >
          <motion.p variants={fadeUp}>
            Poeage Group of Companies (“Poeage Group”, “we”, “our”, “us”) is
            committed to protecting the privacy and personal information of
            individuals who access our website, platforms, and services. This
            Privacy Policy explains how we collect, use, store, and safeguard
            your information.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Information We Collect
          </motion.h2>
          <motion.p variants={fadeUp}>
            We may collect personal information including your name, email
            address, phone number, company details, enquiry messages, and any
            other information you voluntarily submit through forms, emails, or
            communication channels. We may also collect limited technical data
            such as IP address, browser type, and usage patterns for analytics
            and security purposes.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            How We Use Your Information
          </motion.h2>
          <motion.p variants={fadeUp}>
            Information collected is used to respond to enquiries, provide and
            improve our services, communicate important updates, manage business
            operations, and ensure compliance with legal and regulatory
            requirements. We do not use personal data for unrelated or
            unauthorized purposes.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Cookies and Tracking Technologies
          </motion.h2>
          <motion.p variants={fadeUp}>
            Our website may use cookies or similar technologies to enhance user
            experience, analyze website traffic, and improve performance.
            Cookies do not give us access to your computer or personal files.
            You may choose to disable cookies through your browser settings.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Data Protection and Security
          </motion.h2>
          <motion.p variants={fadeUp}>
            Poeage Group implements reasonable technical and organizational
            safeguards to protect personal data against unauthorized access,
            loss, misuse, alteration, or disclosure. While we strive to protect
            your data, no digital transmission can be guaranteed to be 100%
            secure.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Information Sharing
          </motion.h2>
          <motion.p variants={fadeUp}>
            We do not sell, trade, or rent personal information to third parties.
            Information may be shared internally among Poeage Group companies
            only when required for service delivery, operational needs, or legal
            compliance.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Data Retention
          </motion.h2>
          <motion.p variants={fadeUp}>
            Personal information is retained only for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required or permitted by law.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Your Rights
          </motion.h2>
          <motion.p variants={fadeUp}>
            You have the right to request access, correction, or deletion of
            your personal data, subject to applicable laws. Requests may be
            submitted through our official contact channels.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Changes to This Policy
          </motion.h2>
          <motion.p variants={fadeUp}>
            Poeage Group reserves the right to update this Privacy Policy at any
            time. Any changes will be posted on this page. Continued use of our
            website or services constitutes acceptance of the updated policy.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-xl font-semibold text-gray-900"
          >
            Contact Us
          </motion.h2>
          <motion.p variants={fadeUp}>
            If you have questions or concerns regarding this Privacy Policy or
            how your data is handled, please contact Poeage Group through the
            official communication channels listed on our website.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
