import Image from "next/image";
import GradientLink from "../../shared/GradientLink/GradientLink";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BusinessFuture = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='bg-blackCards mt-[120px] text-white w-full relative'>
      <div
        data-aos='fade-up'
        className='ml-5 mr-[60px] relative z-20 pt-8 text-[28px] tracking-[-0.085px]  leading-[40px] font-[1000]
       '
      >
        Transformez votre partage d'informations avec Cardly
      </div>
      <div
        data-aos='fade-up-left'
        className=' h-[260px] w-[270px] z-10 right-0 bottom-[80px] absolute '
      >
        <Image src='/assets/img/card.svg' fill alt='your card' />
      </div>
      <div className='mt-[180px] pb-8 '>
        <GradientLink href='/waitlist' text="rejoindre la liste d'attente" />
      </div>
    </div>
  );
};

export default BusinessFuture;
