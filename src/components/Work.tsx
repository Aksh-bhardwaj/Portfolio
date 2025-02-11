import "./styles/Work.css";
// import WorkImage from "./WorkImage";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Portfolio",
    category: "Web Development",
    description:
      "Designed a dynamic, responsive portfolio to showcase projects, technical abilities, and work accomplishments. Incorporated engaging elements, modern design strategies, and optimized for SEO.",
    tools: "React, TypeScript, SEO Optimization, UI/UX",
  //image: "/images/portfolio.webp",
  },
  {
    name: "Law Advisory Web Application",
    category: "Legal Tech",
    description:
      "Developed a platform for legal service providers featuring document management, court date reminders, appointment scheduling, AI-based service identification, and secure access via Aadhar.",
    tools: "MERN Stack, AI, Aadhar Integration",
  //image: "/images/law-advisory.webp",
  },
  {
    name: "Smart Agritech Platform",
    category: "Agritech & AI",
    description:
      "Developing an AI/ML model for crop quality analysis and farming recommendations using IoT sensors and datasets from UCI, ICRISAT, and the World Bank. Enables direct market access and secure digital contracts.",
    tools: "AI/ML, IoT, GANs, APIs (Plant.ID, TARINA, SoilGrids)",
  //image: "/images/agritech.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
              {/* <WorkImage image={project.image} alt={project.name} /> */}
              {/* Remove the comment and change the image Accordingly */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
