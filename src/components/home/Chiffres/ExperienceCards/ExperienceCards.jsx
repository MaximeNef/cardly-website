import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ExperienceCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const experiences = [
    {
      number: "13",
      description: "Années D’expériences",
    },
    {
      number: "84",
      description: "Années D’expériences",
    },
    {
      number: "30",
      description: "Années D’expériences",
    },
    {
      number: "40K",
      description: "Années D’expériences",
    },
  ];
  return (
    <div className='space-y-[24px]'>
      {experiences.map((experience, i) => {
        return (
          <div
            key={i}
            data-aos='fade-up'
            className='mx-6 h-44 bg-[#F3F3F3] rounded-[20px] text-center'
          >
            <p
              data-aos='fade-up'
              className='text-[65px] font-bold tracking-wide text-transparent bg-clip-text purpleGradient w-fit mx-auto pt-6'
            >
              +{experience.number}
            </p>
            <p className='text-black text-[20px]'>{experience.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCards;
