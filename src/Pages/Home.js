import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const section = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const companies = [
  "Peoage Technologies",
  "Peoage Builders",
  "Peoage Web Services",
  "Peoage IT Solutions",
];

const capabilities = [
  "Software Engineering",
  "Construction & Infrastructure",
  "Recruitment & Consulting",
  "Cloud & Web Services",
  "IT Solutions & Security",
];

const stats = [
  { value: "10+", label: "Industries Served" },
  { value: "3+", label: "Years of Experience" },
  { value: "1000+", label: "Global Professionals" },
  { value: "10M+", label: "Project Value" },
];



export default function Home() {
    const navigate = useNavigate();

  return (
    <div className="text-gray-700 overflow-x-hidden">

      <motion.section
        variants={section}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          variants={stagger}
          className="p-8 rounded-2xl"
        >
          <motion.h1 variants={item} className="text-3xl font-bold leading-snug">
            One Group.<br />
            Multiple Industries.<br />
            Infinite Possibilities.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-sm leading-relaxed text-gray-700"
          >
            Building scalable, future-ready businesses through innovation,
            strategy, and execution excellence.
          </motion.p>

          <motion.div variants={item} className="flex gap-4 mt-6">
            <button  onClick={() => navigate("/companies")}
            className="bg-gradient-to-r from-blue-600 to bg-cyan-400 px-5 py-2 rounded-lg text-sm text-white">
              Explore Companies
            </button>
            <button  onClick={() => navigate("/contactus")}
            className="border border-gray-700 hover:border-gray-500 px-5 py-2 rounded-lg text-sm">
              Contact Group
            </button>
          </motion.div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Office"
          className="rounded-2xl object-cover w-full h-full"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.section>

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team"
          className="rounded-2xl"
        />

        <motion.div variants={stagger}>
          <motion.h2 variants={item} className="text-2xl font-bold mb-4">
            Our Vision: Shaping Tomorrow’s Global Landscape
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 text-sm leading-relaxed"
          >
            We empower organizations to grow sustainably by combining
            innovation, strategic advisory, and operational excellence.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={item}
          className="text-2xl font-bold text-center mb-12"
        >
          Our Companies
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {companies.map((c) => (
            <motion.div
              key={c}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" border-b-2 p-6 rounded-xl cursor-pointer shadow-md"
            >
              <h3 className="font-semibold mb-2">{c}</h3>
              <p className="text-gray-400 text-sm">
                Specialized industry solutions with measurable impact.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-6 shadow-md rounded">
          <motion.h2
            variants={item}
            className="text-2xl font-bold text-center mb-12"
          >
            Core Capabilities
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap}
                variants={item}
                whileHover={{ scale: 1.04 }}
                className="boder b-2 border-gray-700 p-6 rounded-xl text-center"
              >
                {cap}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={item}
          className="text-2xl font-bold text-center mb-12"
        >
          Peoage Group by the Numbers
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="p-6 rounded-xl text-center"
            >
              <p className="text-3xl font-bold text-cyan-500">
                {s.value}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

    </div>
  );
}
