import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const FeatureCards = ({ features, gridLayout, hasMargin }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  return (
    <div className={`sm:space-y-6 md:space-y-0 ${gridLayout ? 'md:grid md:grid-cols-2 md:gap-6' : ''} md:flex flex-row ` }>
      {features.map((feature, i) => {
        return (
            <div
              key={i}
              data-aos='fade-up' style={{ transition: 'background-color 0.5s ease-in-out' }}
              className={` rounded-[20px] text-center bg-whiteGrey md:hover:bg-blackCards transition duration-300 ease-in-out md:m-auto md:mr-[60px] ${ hasMargin ? 'lg:mr-[60px]': 'lg:mr-[0px]'}`}> 
                <div className='flex flex-col items-center sm:my-[20px] md:mx-8 py-[53px]'>
                  <p
                    data-aos='fade-up'
                    className='text-3xl leading-[36px] font-bold tracking-wide text-transparent bg-clip-text purpleGradient w-fit'>
                    {feature.title}
                  </p>
                
                  <p className='mt-8 text-lg leading-[21px]'>
                    {feature.description}
                  </p>
              </div>
            </div>
        );
       
      })}


    </div>
  );
};

export default FeatureCards;
