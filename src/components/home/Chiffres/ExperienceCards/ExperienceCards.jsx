import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ExperienceCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const experiences = [
    {
      number: "O%",
      description: " de pollution",
    },
    {
      number: "+1",
      description: "carte unique",
    },
    {
      number: "10X",
      description: "plus d'interactivité avec vos clients",
    },
    {
      number: "100X",
      description: "D’expériences et d'interactivité avec vos clients",
    },
  ];
  return (
    <div className='space-y-[24px]'>
      {experiences.map((experience, i) => {
        return (
          <div
            key={i}
            data-aos='fade-up'
            className='mx-6 pt-1 pb-6  bg-[#F3F3F3] rounded-[20px] text-center relative'
          >
            <p
              data-aos='fade-up'
              className='text-[65px] font-bold tracking-wide text-transparent bg-clip-text purpleGradient w-fit mx-auto '
            >
              {experience.number}
            </p>
            <p className='mx-12 text-black text-[20px]'>
              {experience.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCards;
