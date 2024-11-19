import { motion } from 'framer-motion';
import { FaBrain, FaCode } from 'react-icons/fa';
import {SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
   SiMongodb, SiGit, SiPython, SiMysql, SiPostgresql, SiSqlite } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { TechSkill, SoftSkill } from '../Types/Interfaces';


const techSkills: TechSkill[] = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "from-yellow-400 to-yellow-500",
      proficiency: 90
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "from-red-500 to-red-600",
      proficiency: 80
    },
    {
      name: "Python",
      icon: <SiPython />,
      color: "from-gray-500 to-gray-600",
      proficiency: 40
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-400 to-blue-500",
      proficiency: 85
    },
    {
      name: "React",
      icon: <SiReact />,
      color: "from-cyan-400 to-cyan-500",
      proficiency: 88
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-gray-600 to-gray-700",
      proficiency: 82
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "from-teal-400 to-teal-500",
      proficiency: 92
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "from-green-500 to-green-600",
      proficiency: 85
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "from-green-600 to-green-700",
      proficiency: 80
    },
    {
      name: "Git",
      icon: <SiGit />,
      color: "from-orange-500 to-orange-600",
      proficiency: 88
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "from-blue-600 to-blue-700",
      proficiency: 75
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "from-indigo-500 to-indigo-600",
      proficiency: 70
    },
    {
      name: "SQL",
      icon: <SiSqlite />,
      color: "from-purple-400 to-purple-500",
      proficiency: 78
    }
  ];
const softSkills: SoftSkill[] = [
  {
    title: "Problem Solving",
    description: "Analytical thinking and creative solution development",
    icon: "🧩"
  },
  {
    title: "Communication",
    description: "Clear and effective verbal and written communication",
    icon: "💬"
  },
  {
    title: "Team Collaboration",
    description: "Strong team player with leadership abilities",
    icon: "🤝"
  },
  {
    title: "Adaptability",
    description: "Quick learner and adaptable to new technologies",
    icon: "🔄"
  }
];

const SkillBar = ({ skill }: { skill: TechSkill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-2xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
          {skill.icon}
        </span>
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      </div>
      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
        />
      </div>
      <span className="absolute top-4 right-4 text-sm text-gray-400">
        {skill.proficiency}%
      </span>
    </motion.div>
  );
};

const SoftSkillCard = ({ skill }: { skill: SoftSkill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
    >
      <span className="text-4xl mb-4 block">{skill.icon}</span>
      <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
      <p className="text-gray-400">{skill.description}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,51,255,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Skills Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8 "
          >
            <FaCode className="text-4xl text-blue-500" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <FaBrain className="text-4xl text-purple-500" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill) => (
              <SoftSkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
