import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SectionTitle = ({ title, subTitle, description, number }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className='relative bg-[#f8f8f7] z-50 pt-[65px]'>
      <div className='relative z-20 mx-[30px]'>
        <p className='text-lg font-ABeeZeeItalic text-li'>{title}</p>
        <p
          data-aos='fade-up'
          className='text-[28px] font-ABeeZeeItalic leading-8 text-black'
        >
          {subTitle}
        </p>
        <p className='mt-6 font-ABeeZeeItalic text-[17px] leading-6'>
          {description}
        </p>
      </div>

      <p className='absoluteCenter left-[130px] top-[114px] font-ABeeZeeItalic text-[200px] text-whiteGrey'>
        {number}
      </p>
    </div>
  );
};

export default SectionTitle;
