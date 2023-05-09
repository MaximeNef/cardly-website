import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className=' mx-2 mb-[42px]'>
      {/* <p className='text-4xl tracking-[-0.085px]  leading-[60px] font-[1000] text-transparent bg-clip-text purpleGradient w-fit'>
        Une Solution Virtuelle
      </p>
      <p className='text-4xl tracking-[-0.085px]  leading-[80px] font-[1000] text-transparent bg-clip-text purpleGradient w-fit'>
        Complète Conçue
      </p>
      <p className='text-4xl tracking-[0.085px]  leading-[60px] font-[1000] text-transparent bg-clip-text purpleGradient w-fit'>
        Pour Votre Entreprise
      </p> */}
      <p
        data-aos='fade-up'
        className='text-5xl tracking-[-0.085px]  leading-[60px] font-[1000] text-transparent bg-clip-text purpleGradient w-fit'
      >
        Transférez vos informations avec votre carte digitale!
      </p>
      {/* <p className="mt-[42px]">
        Une solution complète Une solution complète Une solution complète Une
        solution complète
      </p> */}
    </div>
  );
};

export default HeroHeader;
