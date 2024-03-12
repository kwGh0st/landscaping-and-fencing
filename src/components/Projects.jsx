import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Carousel } from "@material-tailwind/react";
import { projects } from "../assets/projects";
import { styles } from "../styles";
import { projectsBg, facebook, instagram } from "../assets";

const ProjectSlider = ({ images }) => {
  return (
    <Carousel
      className="w-full md:w-4/5 h-full rounded-b-lg"
      breakpoints={{
        600: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="w-full h-full">
          <img className="object-cover" src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

const Projects = () => {
  const projectsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col w-full items-center gap-8 bg-gray-100 text-center">
      <div
        className="h-screen relative w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${projectsBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white font-serif">
            <h1 className={`${styles.heroHeadText} flex flex-col`}>Projects</h1>
          </div>
        </div>
      </div>
      <p className="mt-12 mb-4 text-2xl italic font-serif max-w-6xl px-6">
        Some of the projects completed by <br />
        <span className="italic underline font-bold">
          DW Landscaping & Fencing.
          <br />
        </span>
        For more please visit:
        <div className="flex flex-col w-full justify-center items-center mt-8">
          <div className="flex flex-row justify-center gap-8">
            <a
              className="hover:rotate-45 duration-300"
              href="https://www.facebook.com/waldemar.wojtacha"
              target="_blank"
            >
              <img className="w-12 h-12" src={facebook} alt="facebook" />
            </a>
            <a
              className="hover:rotate-45 duration-300"
              href="https://www.instagram.com/wojtachawaldemar/"
              target="_blank"
            >
              <img className="w-12 h-12" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </p>
      <div className="flex flex-col gap-8 px-4 md:px-12 m-12 w-full">
        {currentProjects.map((item) => (
          <div
            className={`flex flex-col rounded-lg bg-gray-200 shadow-xl ${
              item.id % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12 justify-evenly items-center p-8 `}
            key={item.id}
          >
            <div className="md:w-1/2 self-start text-start  text-sm lg:text-2xl text-gray-800 italic">
              {item.description.map((line, index) => (
                <p className="my-2" key={index}>
                  {line}
                </p>
              ))}
            </div>
            <ProjectSlider className="w-1/2" images={item.images} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(projects.length / projectsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            className={`mx-2 p-2 border rounded ${
              currentPage === index + 1 ? "bg-gray-400" : "bg-gray-200"
            }`}
            onClick={() => {
              window.scrollTo(0, 800);
              paginate(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
