import { useState, useEffect } from "react";
import './navBackgroundStyles.css'
import { AiOutlineHome, AiOutlineRead, AiOutlinePhone, AiOutlineTool } from "react-icons/ai";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < prevScrollY || currentScrollY < 80);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
<div className="relative">
  {/* Background */}
  <div className="navbar-background">
    <div className="bulb"></div>
    <div className="bulb"></div>
    <div className="bulb"></div>
  </div>

  {/* Navbar */}
  <div
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-opacity-30 text-white rounded-full shadow-xl px-6 py-2 flex items-center justify-between w-[90%] max-w-4xl transition-all duration-300 ${
      showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <NavItem href="#home" icon={<AiOutlineHome size={24} />} label="Home" active={activeSection === "home"} />
    <NavItem href="#skills" icon={<AiOutlineTool size={24} />} label="Skills" active={activeSection === "skills"} />
    <NavItem href="#projects" icon={<AiOutlineRead size={24} />} label="Projects" active={activeSection === "projects"} />
    <NavItem href="#certificates" icon={<AiOutlineTool size={24} />} label="Certificates" active={activeSection === "certificates"} />
    <NavItem href="#contact" icon={<AiOutlinePhone size={24} />} label="Contact" active={activeSection === "contact"} />
  </div>
</div>
  );
};

const NavItem = ({ href, icon, label, active = false }: { href: string; icon: JSX.Element; label: string; active?: boolean }) => {
  return (
    <a
      href={href}
      className={`relative group flex flex-col items-center mx-3 text-sm transition ${
        active ? "text-indigo-800" : "text-gray-300 hover:text-white"
      }`}
    >
      <div
        className={`p-2 rounded-full transition-all duration-300 ${
          active
            ? "bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg"
            : "group-hover:bg-gradient-to-r from-gray-700 to-gray-900"
        }`}
      >
        {icon}
      </div>
      <span className={`mt-1 ${active ? "font-bold bg-clip-text bg-gradient-to-r from-indigo-900 to-black-400" : ""}`}>
        {label}
      </span>
    </a>
  );
};

export default Navbar;
