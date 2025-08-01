import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zsy5lsg',     // replace with your EmailJS service ID
      'template_zesviwi',    // replace with your EmailJS template ID
      formRef.current,
      'E9X8qzxFaFSSajbR8'         // replace with your EmailJS user ID (public key)
    )
      .then(() => {
        toast.success('✅ Message sent successfully!', {
          icon: '✉️',
        });

        formRef.current.reset();

      })
      .catch((err) => {
        console.error(err.text);
        toast.error('❌ Failed to send. Try again.');
      });

  };

  return (
    <section
      id="contact"
      className="relative z-10 px-6 sm:px-10 py-16 bg-black text-white font-space-grotesk overflow-hidden"
    >
      {/* Glowing Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,255,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_50%,rgba(0,255,255,0.1)_0%,transparent_40%)] animate-pulse" />
      </div>

      {/* Single Subtle Interactive Blob */}
      <motion.div
        className="absolute w-[32rem] h-[32rem] bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#121212] rounded-full opacity-20 blur-[100px] mix-blend-lighten pointer-events-none"
        style={{ top: '10%', left: '25%' }}
        animate={{ x: [0, 30, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        whileHover={{
          scale: 1.1,
          opacity: 0.3,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      />
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
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-lg  bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
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
            rows="4"
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
