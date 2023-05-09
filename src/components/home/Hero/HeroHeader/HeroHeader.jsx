import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className=' mx-2 mb-[42px]'>

      <p
        data-aos='fade-up'
        className='text-5xl tracking-[-0.085px]  leading-[60px] font-[1000] text-transparent bg-clip-text purpleGradient w-fit sm:m-auto'
      >
        Transférez vos informations avec votre carte digitale!
      </p>

    </div>
  );
};

export default HeroHeader;
