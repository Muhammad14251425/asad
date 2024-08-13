'use client'

import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from 'next/image'
import { motion } from 'framer-motion';

const Hero1 = () => {
  return (
    <div className='max-w-7xl w-full h-auto mx-auto mt-14'>

      <div className="mt-10">
        <CoreValues />
      </div>

    </div>
  )
}

export default Hero1

// const CoreValues = () => {
//   return (
//     <div className="flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-500 text-white min-h-screen p-10">
//       <h1 className="text-5xl font-bold mb-8">Core Values</h1>
//       <div className="bg-white text-black rounded-lg p-8 shadow-2xl w-full max-w-3xl">
//         <h2 className="text-4xl font-extrabold text-center mb-6">T.H.R.E.E - U.</h2>
//         <ul className="space-y-4 text-lg">
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-red-500 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">T</span>ransparency
//             <span className="ml-4 text-blue-500">→ Being honest in our communication.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-orange-500 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">H</span>umility
//             <span className="ml-4 text-blue-500">→ Humble in our achievements.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-yellow-500 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">R</span>eliability
//             <span className="ml-4 text-blue-500">→ Establishing trust with our clients.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-green-500 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">E</span>xcellence
//             <span className="ml-4 text-blue-500">→ Delivering exceptional services to our clients.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-blue-500 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">E</span>mpathy
//             <span className="ml-4 text-blue-500">→ Looking after our own.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-purple-500 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">U</span>nwavering
//             <span className="ml-4 text-blue-500">→ Executing with firm determination.</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const CoreValues = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen p-10">
//       <h1 className="text-5xl font-bold mb-8">Core Values</h1>
//       <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-3xl">
//         <h2 className="text-4xl font-extrabold text-center mb-6">T.H.R.E.E - U.</h2>
//         <ul className="space-y-4 text-lg">
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">T</span>ransparency
//             <span className="ml-4">→ Being honest in our communication.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">H</span>umility
//             <span className="ml-4">→ Humble in our achievements.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">R</span>eliability
//             <span className="ml-4">→ Establishing trust with our clients.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">E</span>xcellence
//             <span className="ml-4">→ Delivering exceptional services to our clients.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">E</span>mpathy
//             <span className="ml-4">→ Looking after our own.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600 mr-4">●</span>
//             <span className="font-bold text-2xl mr-2">U</span>nwavering
//             <span className="ml-4">→ Executing with firm determination.</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const CoreValues = () => {
//   return (
//     <div className="flex flex-col items-center bg-black text-white min-h-screen p-10">
//       <h1 className="text-5xl font-bold mb-8">Core Values</h1>
//       <div className="bg-gray-900 rounded-lg p-8 shadow-2xl w-full max-w-3xl">
//         <h2 className="text-4xl font-extrabold text-center mb-6 text-yellow-400">T.H.R.E.E - U.</h2>
//         <ul className="space-y-4 text-lg">
//           <li className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             <span className="text-2xl font-bold text-red-400 mr-4">●</span>
//             <span className="font-bold text-2xl text-yellow-400 mr-2">T</span>ransparency
//             <span className="ml-4 text-yellow-200">→ Being honest in our communication.</span>
//           </li>
//           <li className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             <span className="text-2xl font-bold text-orange-400 mr-4">●</span>
//             <span className="font-bold text-2xl text-yellow-400 mr-2">H</span>umility
//             <span className="ml-4 text-yellow-200">→ Humble in our achievements.</span>
//           </li>
//           <li className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             <span className="text-2xl font-bold text-yellow-400 mr-4">●</span>
//             <span className="font-bold text-2xl text-yellow-400 mr-2">R</span>eliability
//             <span className="ml-4 text-yellow-200">→ Establishing trust with our clients.</span>
//           </li>
//           <li className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             <span className="text-2xl font-bold text-green-400 mr-4">●</span>
//             <span className="font-bold text-2xl text-yellow-400 mr-2">E</span>xcellence
//             <span className="ml-4 text-yellow-200">→ Delivering exceptional services to our clients.</span>
//           </li>
//           <li className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             <span className="text-2xl font-bold text-blue-400 mr-4">●</span>
//             <span className="font-bold text-2xl text-yellow-400 mr-2">E</span>mpathy
//             <span className="ml-4 text-yellow-200">→ Looking after our own.</span>
//           </li>
//           <li className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             <span className="text-2xl font-bold text-purple-400 mr-4">●</span>
//             <span className="font-bold text-2xl text-yellow-400 mr-2">U</span>nwavering
//             <span className="ml-4 text-yellow-200">→ Executing with firm determination.</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const CoreValues = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <div className="flex flex-col b text-white py-4 rounded-xl ">
      <motion.h1
        className="text-6xl text-black font-bold mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Core Values
      </motion.h1>
      <div className="flex ">
        <div className="w-1/3" />

        <motion.div
          className="bg-gray-900 rounded-lg p-8 shadow-2xl w-full max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-extrabold text-center mb-6 text-yellow-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            T.H.R.E.E - U.
          </motion.h2>
          <motion.ul
            className="space-y-4 text-lg"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.li
              className="flex items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="text-2xl font-bold text-red-400 mr-4">●</span>
              <span className="font-bold text-2xl text-yellow-400 mr-2">T</span>ransparency
              <span className="ml-4 text-yellow-200">→ Being honest in our communication.</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="text-2xl font-bold text-orange-400 mr-4">●</span>
              <span className="font-bold text-2xl text-yellow-400 mr-2">H</span>umility
              <span className="ml-4 text-yellow-200">→ Humble in our achievements.</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="text-2xl font-bold text-yellow-400 mr-4">●</span>
              <span className="font-bold text-2xl text-yellow-400 mr-2">R</span>eliability
              <span className="ml-4 text-yellow-200">→ Establishing trust with our clients.</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="text-2xl font-bold text-green-400 mr-4">●</span>
              <span className="font-bold text-2xl text-yellow-400 mr-2">E</span>xcellence
              <span className="ml-4 text-yellow-200">→ Delivering exceptional services to our clients.</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="text-2xl font-bold text-blue-400 mr-4">●</span>
              <span className="font-bold text-2xl text-yellow-400 mr-2">E</span>mpathy
              <span className="ml-4 text-yellow-200">→ Looking after our own.</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="text-2xl font-bold text-purple-400 mr-4">●</span>
              <span className="font-bold text-2xl text-yellow-400 mr-2">U</span>nwavering
              <span className="ml-4 text-yellow-200">→ Executing with firm determination.</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/Hero1/train-cargo.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/Hero1/road-cargo.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/Hero1/trollers-cargo.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/Hero1/plane-cargo.jpg",
  },
];