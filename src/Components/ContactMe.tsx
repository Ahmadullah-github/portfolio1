import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import Background from './Background';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactMe = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("https://api.web3forms.com/submit", {
        access_key: "1d7a205d-3d0b-4aaa-ab63-e40f12fa3f07",
        subject: "📧 A message from portfolio!", // Email subject
        from_name: data.name, // Sender's name
        from_email: data.email, // Sender's email
        ...data
      });
      setNotification({ message: "Message sent successfully!", type: "success" });
      reset(); // Reset form fields
    } catch (error) {
      setNotification({ message: `Failed to send the message. Please try again. ${error}`, type: `error` });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/Ahmadullah-github',
      color: 'hover:text-purple-500'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://github.com/Ahmadullah-github',
      color: 'hover:text-blue-500'
    },
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Effects */}

        <Background />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-gray-900/50 backdrop-blur-xl rounded-lg p-8 border border-gray-700/50"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full bg-gray-800/50 border ${
              errors.name ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 ${
              errors.name ? "focus:ring-red-500" : "focus:ring-purple-500"
            } transition-all`}
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full bg-gray-800/50 border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 ${
              errors.email ? "focus:ring-red-500" : "focus:ring-purple-500"
            } transition-all`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows={5}
            className={`w-full bg-gray-800/50 border ${
              errors.message ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 ${
              errors.message ? "focus:ring-red-500" : "focus:ring-purple-500"
            } transition-all`}
          />
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-6 py-3 font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>
        {notification && (
          <div
            className={`mt-4 p-3 rounded-lg text-white ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-lg p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-2xl text-purple-500" />
                    <a href="mailto:ahmadhmanush777@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      ahmadhmanush777@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-lg p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${link.color} transition-colors`}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
