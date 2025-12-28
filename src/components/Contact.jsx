import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.scss";
import fullstackGif from '../assets/ash2.gif';
import earth from '../assets/e.png';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 sm:p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-sm sm:text-base'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-sm sm:text-base'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-sm sm:text-base'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base resize-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-6 sm:px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary text-sm sm:text-base'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="flex-shrink-0" />
            <a href="mailto:balendramcapu@gmail.com" target="_blank" className="blue-text-gradient break-all text-xs sm:text-sm">balendramcapu@gmail.com</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="flex-shrink-0" />
            <a href="https://api.whatsapp.com/send/?phone=917040031669&text&app_absent=0&lang=en" target="_blank" className="blue-text-gradient text-xs sm:text-sm">
              +91 9424703403
            </a>
          </article>
        </div>
        </form>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[300px] sm:h-[400px]'
      >
        <EarthCanvas />
        
      
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
