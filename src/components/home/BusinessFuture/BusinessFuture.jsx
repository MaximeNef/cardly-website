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
    <div className=" m-auto  md:mt-[200px] md:mx-[25px] ">
      <div className='bg-blackCards mt-[120px] text-white w-full relative  md:rounded-[25px]'>

        <div data-aos='fade-up'className='sm:ml-5 sm:mr-[60px] relative z-20 pt-8 sm:text-[28px] tracking-[-0.085px] leading-[40px] font-[1000] md:w-[400px] lg:max-w-[600px] md:top-[100px] md:left-[50px] md:text-[40px]'>
          Transformez votre partage d'informations avec Cardly
        </div>

        <div data-aos='fade-up-left' className=' sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[500px] z-10 sm:right-0 sm:bottom-[80px] md:bottom-[50px] md:left-[45%] absolute '>
          <Image src='/assets/img/card.svg' fill alt='your card' />
        </div>

        <div className='mt-[180px] sm:pb-8 md:pb-[50px] '>
          <GradientLink isAlign={false} href='/waitlist' text="rejoindre la liste d'attente" />
        </div>
      </div>
    </div>
  );
};

export default BusinessFuture;
