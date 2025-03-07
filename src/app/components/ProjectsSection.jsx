"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Youtube Clone Page",
    description: "Make a youtube clone page using HTML, CSS, and JS",
    image: "/images/projects/2.4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/clone-youtube",
    previewUrl: "https://adbtzmi.github.io/clone-youtube/youtube",
  },
  {
    id: 2,
    title: "Operating System Project",
    description: "Running Containers for Application Development",
    image: "/images/projects/2.3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/OSProject",
    previewUrl: "https://github.com/adbtzmi/OSProject",
  },
  {
    id: 3,
    title: "Mahallah Bilal Webiste",
    description: "Create a static website for Mahallah Bilal",
    image: "/images/projects/2.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/Mahallah-Bilal",
    previewUrl: "https://adbtzmi.github.io/Mahallah-Bilal/home.html",
  },
  {
    id: 4,
    title: "RM 1 Campaign Website",
    description: "Create a static website for RM 1 Campaign",
    image: "/images/projects/2.2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/Individual-Assignment-1.git", 
    previewUrl: "https://adbtzmi.github.io/Individual-Assignment-1/",
  },     
  {
    id: 5,
    title: "Adib's Portfolio",
    description: "Create my portfolio using Next.js",
    image: "/images/projects/2.5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/adib-portfolio.git",  
    previewUrl: "https://adbtzmi.vercel.app/",
  },
  {
    id: 6,
    title: "ClubUnity Website",
    description: "Create club management system using laravel",
    image: "/images/projects/2.6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/ClubUnity.git",
    previewUrl: "https://adbtzmi.github.io/ClubUnity/",
  },
    
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
