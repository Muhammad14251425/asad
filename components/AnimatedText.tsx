'use client'
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const AnimatedText = () => (
  <div className="text-center mt-10">
    <motion.h1
      custom={0}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="text-3xl font-bold"
    >
      Facing <span className="text-red-500">Challenges</span> in Transporting Your Loads?
    </motion.h1>
    <motion.div
      custom={1}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="text-4xl font-bold mt-2"
    >
      /
    </motion.div>
    <motion.h2
      custom={2}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="text-3xl font-bold mt-2"
    >
      Let Us Make It <span className="text-blue-500">Effortless</span> for You!
    </motion.h2>
  </div>
);

export default AnimatedText;
