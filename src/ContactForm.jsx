import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { slideIn } from "./Utils/motion";

const ContactForm = ({ notifyMail }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.message === "") {
      alert("Invalid Input");
      return;
    }
    if (form.email === "") {
      alert("Email cannot be blank");
      return false;
    } else if (form.email.length < 5) {
      alert("Email cannot be less than 5 characters");
      return false;
    } else if (!form.email.indexOf("@")) {
      alert("Invalid Email");
      return false;
    }
    /////template_yrlss19
    /////service_7csj1em
    ///// 1TVurSpp00nkAoHhR
    emailjs
      .send(
        "service_7csj1em",
        "template_yrlss19",
        {
          from_name: form.name,
          to_name: "Anshul",
          from_email: form.email,
          to_email: "anshulrat07@gmail.com",
          message: form.message,
        },
        "1TVurSpp00nkAoHhR"
      )
      .then(
        () => {
          notifyMail();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <motion.div
      className='w-full h-full text-center'
      variants={slideIn("left", "spring", 0, 2)}
    >
      <form className='bg-gray-200 h-full w-full rounded-xl mt-10 flex flex-col gap-5 p-10'>
        <label htmlFor='name'>
          Your Name-
          <input
            autoComplete='off'
            type='text'
            className='w-1/2 border-2 rounded-md m-4 text-center'
            id='name'
            name='name'
            placeholder='Enter Your Name'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          You Mail ID-
          <input
            type='text'
            name='email'
            autoComplete='off'
            id='email'
            className='w-1/2 border-2 rounded-md  m-4 text-center'
            placeholder='Enter Your Email Id'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='message'>Your Enquiry</label>
        <textarea
          className='px-10'
          name='message'
          id='message'
          autoComplete='off'
          cols='20'
          rows='5'
          onChange={handleChange}
        />
        <br />
        <button
          type='submit'
          onClick={handleSubmit}
          className='bg-slate-500 w-20 rounded-md hover:bg-slate-400'
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default SectionWrapper(ContactForm, "ContactForm");
