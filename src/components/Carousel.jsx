import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'To Do List',
    image: '/assets/projects/project-1.png',
    description: "This To-Do List helps people organize their tasks easily. It's good for managing personal tasks or keeping track of small projects.",
    github: 'https://github.com/olisebz/to-do',
    tech: 'HTML CSS JavaScript'
  },
  {
    title: 'ZooYO',
    image: '/assets/projects/project-2.png',
    description: "ZooYO is an application designed for a zoo, enabling users to purchase tickets and book events conveniently. Each ticket is assigned a unique UUID, sourced from the backend.",
    github: 'https://github.com/olisebz/zooYO',
    tech: 'HTML CSS JavaScript Java SpringBoot'
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full sm:w-2/3 lg:w-1/2">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="bg-purple-dark p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-2xl mb-4">{project.title}</h3>
                <img src={project.image} alt={project.title} className="rounded-t-lg w-full h-48 object-cover mb-4" />
                <p className="text-white mb-4">{project.description}</p>
                <a href={project.github} className="relative inline-block text-white bg-gradient-to-r from-purple via-purple to-purple-dark border-2 border-transparent rounded-full py-1 px-4 transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2 shadow-xl hover:shadow-2xl overflow-hidden border-white">
                <span className="absolute inset-0 bg-blue-700 opacity-0 transition duration-500 ease-in-out transform hover:opacity-100"></span>
                <span className="relative z-10 font-bold text-sm tracking-wide">View Project</span>
                <span className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-blue-500 via-purple to-blue-500 animate-gradient-x"></span>
                <span className="absolute inset-0 border-4 border-blue-500 rounded-full opacity-0 animate-glow"></span>
                </a>
                <p className="text-white mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-2 rounded-md shadow-custom">
                  {project.tech.split(' ').map((tech, index) => (
                    <span key={index} className="inline-block bg-purple bg-opacity-75 text-white px-3 py-1 rounded-full m-1 shadow-custom hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105">
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
