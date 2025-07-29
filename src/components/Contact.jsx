import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     // replace with your EmailJS service ID
      'your_template_id',    // replace with your EmailJS template ID
      formRef.current,
      'your_user_id'         // replace with your EmailJS user ID (public key)
    )
      .then(() => {
        setSent(true);
        formRef.current.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error(err.text);
      });
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-6 sm:px-10 py-24 bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white font-space-grotesk"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Let’s Connect
        </motion.h2>
        <p className="text-gray-300 mt-4 text-lg">
          Got a question, collaboration, or opportunity in mind? Send me a message!
        </p>
      </div>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Your Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
          ></textarea>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold shadow-lg transition-all duration-300"
          >
            <FaPaperPlane />
            Send Message
          </motion.button>
          {sent && (
            <p className="mt-4 text-green-400 animate__animated animate__fadeIn">
              ✅ Message Sent Successfully!
            </p>
          )}
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
