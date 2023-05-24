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
      description: "d’expériences et d'interactivité avec vos clients",
    },
  ];
  return (
    <div className='space-y-[24px] md:space-y-0 md:flex flex-row justify-between '>
      {experiences.map((experience, i) => {
        return (
          <div
            key={i}
            data-aos='fade-up'
            className=' pt-1 md:pt-0 mb-6 pb-6 md:mb-0 md:pb-0 mx-2 lg:mx-6 bg-[#F3F3F3] rounded-[20px] text-center relative md:w-[200px] lg:w-[100%] md:flex flex-col'
          >
            <div className="md:m-auto">
              <p
                data-aos='fade-up'
                className='text-[65px] md:text-[40px] lg:text-[65px] font-bold tracking-wide text-transparent bg-clip-text purpleGradient w-fit mx-auto '
              >
                {experience.number}
              </p>
              <p className='mx-12 md:mx-10 lg:mx-12  text-black text-[20px] md:text-[18px] lg:text-[20px] pb-[10px]'>
                {experience.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCards;
