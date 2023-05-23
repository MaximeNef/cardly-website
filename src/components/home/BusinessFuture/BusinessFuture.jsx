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
    <div className=" m-auto  md:mt-[200px] mx-[0px] md:mx-[25px] ">
      <div className='bg-blackCards mt-[120px] text-white w-full relative  md:rounded-[25px]'>

        <div data-aos='fade-up'className='ml-5  mr-[60px] relative z-20 pt-8 text-[28px] tracking-[-0.085px] leading-[40px] font-[1000] md:w-[400px] lg:max-w-[600px] md:top-[100px] md:left-[50px] md:text-[40px]'>
          Transformez votre partage d'informations avec Cardly
        </div>

        <div data-aos='fade-up-left' className=' h-[250px] w-[250px] md:h-[400px] md:w-[500px] z-10 sm:right-0 bottom-[80px]  md:bottom-[50px] left-[40%] md:left-[45%] absolute '>
          <Image src='/assets/img/card.svg' fill alt='your card' />
        </div>
      <div className="flex">
        <div className='mt-[180px] pb-8 md:pb-[50px] mx-auto md:mx-0'>
          <GradientLink isAlign={false} href='/waitlist' text="rejoindre la liste d'attente" />
        </div>

      </div>
      </div>
    </div>
  );
};

export default BusinessFuture;
