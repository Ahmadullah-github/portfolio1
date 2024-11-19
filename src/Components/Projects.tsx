import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../Types/Interfaces';


const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "/projects/ecommerce.jpg",
      description: "A modern e-commerce platform with real-time inventory tracking and AI-powered recommendations.",
      techs: [
        { name: "React", color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", color: "from-green-400 to-green-600" },
        { name: "MongoDB", color: "from-green-500 to-teal-500" },
        { name: "Socket.io", color: "from-purple-400 to-purple-600" }
      ],
      githubLink: "https://github.com/yourusername/ecommerce",
      siteLink: "https://demo-ecommerce.com",
      features: [
        "Real-time inventory management",
        "AI-powered product recommendations",
        "Secure payment integration",
        "Advanced analytics dashboard"
      ],
      category: 'fullstack'
    },
    {
      id: 2,
      title: "Social Media Platform",
      image: "/projects/socialmedia.jpg",
      description: "A feature-rich social media platform with real-time chat, notifications, and media sharing.",
      techs: [
        { name: "Vue.js", color: "from-teal-400 to-teal-600" },
        { name: "Firebase", color: "from-yellow-400 to-orange-500" },
        { name: "Node.js", color: "from-green-400 to-green-600" },
        { name: "Express.js", color: "from-gray-400 to-gray-600" }
      ],
      githubLink: "https://github.com/yourusername/socialmedia",
      siteLink: "https://demo-socialmedia.com",
      features: [
        "Real-time messaging and notifications",
        "User profile management",
        "Media sharing and commenting",
        "Friend connections and follows"
      ],
      category: 'fullstack'
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      image: "/projects/finance.jpg",
      description: "An application for tracking expenses, managing budgets, and visualizing financial health.",
      techs: [
        { name: "React Native", color: "from-purple-400 to-purple-600" },
        { name: "TypeScript", color: "from-blue-400 to-blue-600" },
        { name: "Firebase", color: "from-yellow-400 to-orange-500" },
        { name: "D3.js", color: "from-indigo-400 to-indigo-600" }
      ],
      githubLink: "https://github.com/yourusername/finance-tracker",
      siteLink: "https://demo-finance.com",
      features: [
        "Expense tracking and budgeting",
        "Interactive financial charts",
        "Bank account synchronization",
        "Goal setting and progress tracking"
      ],
      category: 'mobile'
    },
    {
      id: 4,
      title: "Healthcare Management System",
      image: "/projects/healthcare.jpg",
      description: "A comprehensive healthcare management system with patient records, appointment scheduling, and billing.",
      techs: [
        { name: "Angular", color: "from-red-400 to-red-600" },
        { name: "NestJS", color: "from-purple-400 to-purple-600" },
        { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
        { name: "Docker", color: "from-gray-400 to-blue-500" }
      ],
      githubLink: "https://github.com/yourusername/healthcare-system",
      siteLink: "https://demo-healthcare.com",
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Billing and invoicing",
        "Prescription and medication tracking"
      ],
      category: 'fullstack'
    },
    {
      id: 5,
      title: "Learning Management System (LMS)",
      image: "/projects/lms.jpg",
      description: "A learning management system for schools, including course creation, grading, and interactive quizzes.",
      techs: [
        { name: "React", color: "from-cyan-400 to-blue-500" },
        { name: "GraphQL", color: "from-pink-400 to-pink-600" },
        { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
        { name: "Apollo", color: "from-purple-400 to-purple-600" }
      ],
      githubLink: "https://github.com/yourusername/lms",
      siteLink: "https://demo-lms.com",
      features: [
        "Course creation and management",
        "Student and teacher portals",
        "Automated grading and quizzes",
        "Interactive discussion forums"
      ],
      category: 'fullstack'
    },
    {
      id: 6,
      title: "Real Estate Management System",
      image: "/projects/realestate.jpg",
      description: "A real estate management system for property listings, client management, and appointment scheduling.",
      techs: [
        { name: "Next.js", color: "from-indigo-400 to-indigo-600" },
        { name: "MySQL", color: "from-blue-400 to-teal-500" },
        { name: "Stripe", color: "from-purple-400 to-purple-600" },
        { name: "Chakra UI", color: "from-green-400 to-teal-500" }
      ],
      githubLink: "https://github.com/yourusername/realestate-management",
      siteLink: "https://demo-realestate.com",
      features: [
        "Property listing management",
        "Client and lead tracking",
        "Appointment and viewing scheduling",
        "Integrated payment gateway for deposits"
      ],
      category: 'fullstack'
    }
  ];
  

  const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const categories = ['all', 'frontend', 'fullstack', 'mobile'];
  
    const filteredProjects = selectedCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
  
    return (
      <section className="relative w-full bg-black">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my latest projects showcasing modern web development techniques and best practices.
            </p>
          </div>
  
          {/* Category Filter - Now Scrollable on Mobile */}
          <div className="flex justify-center md:justify-center gap-4 mb-12 overflow-x-auto pb-4 px-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
  
          {/* Projects Grid - Improved Responsive Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  };

export default Projects;