import { lazy, Suspense } from "react";
import ContactForm from "./ContactForm";

const LazyEarth = lazy(() => import("./3DComponents/EarthRender"));

const Contact = ({ notifyMail }) => {
  return (
    <div className="contact page">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl font-bold mb-5">Contact Us</h1>
        <p className=" text-xl w-1/2 text-center -mb-5">
          We would love to hear it from you. No matter from which part of the
          world you are, we would love to know your opinions and requests.
        </p>
      </div>
      <div className="contact flex flex-col md:flex-row justify-evenly items-center">
        <ContactForm notifyMail={notifyMail} />
        <div className="earth h-screen w-80 md:w-1/2">
          <Suspense fallback={<h1 className="text-2xl mt-20">Loading...</h1>}>
            <LazyEarth />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Contact;
