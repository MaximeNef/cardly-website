import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeatureCards = ({ features }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='space-y-[24px]'>
      {features.map((feature, i) => {
        return (
          <div
            key={i}
            data-aos='fade-up'
            className=' mx-6 rounded-[20px] text-center bg-whiteGrey lg:hover:bg-black  '
          >
            <div className='flex flex-col items-center mx-8 py-[53px]'>
              <p
                data-aos='fade-up'
                className='text-3xl leading-[36px] font-bold tracking-wide text-transparent bg-clip-text purpleGradient w-fit'
              >
                {feature.title}
              </p>
              {/* <div className='mt-8'>
                <Image
                  src={feature.src}
                  height={68}
                  width={68}
                  alt='hexagone'
                />
              </div> */}
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
