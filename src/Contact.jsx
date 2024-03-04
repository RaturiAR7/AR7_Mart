import { lazy, Suspense } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "./Utils/motion";
import { SectionWrapper } from "./hoc";

const LazyEarth = lazy(() => import("./3DComponents/EarthRender"));

const Contact = ({ notifyMail }) => {
  return (
    <div className='contact page w-full'>
      <div className='flex flex-col items-center'>
        <motion.h1
          variants={textVariant(0)}
          className='text-center text-5xl font-bold mb-5'
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeIn("", "", 1, 1, 0)}
          className=' text-xl w-1/2 text-center -mb-5'
        >
          We would love to hear it from you. No matter from which part of the
          world you are, we would love to know your opinions and requests.
        </motion.p>
      </div>
      <div className='w-full h-full contact flex flex-col md:flex-row justify-around items-center'>
        <ContactForm className='w-full h-full' notifyMail={notifyMail} />
        <motion.div
          variants={slideIn("right", "spring", 0, 2)}
          className='earth h-screen w-80 md:w-1/3'
        >
          <Suspense fallback={<h1 className='text-2xl mt-20'>Loading...</h1>}>
            <LazyEarth />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
