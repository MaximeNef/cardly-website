import { decouvrir, rounded, threeCards } from "./svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BottomHeroImg = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);
  return (
    <div className='relative'>
      <div data-aos='fade-up'>
        <div
          className='absoluteCenter top-[-115px]'
          dangerouslySetInnerHTML={{
            __html: threeCards,
          }}
        />
      </div>

      <div className='relative z-10'>
        <div
          id='decouvrir'
          className='absoluteCenter left-[38%] top-[-60px]'
          dangerouslySetInnerHTML={{
            __html: decouvrir,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: rounded,
          }}
        />
      </div>
    </div>
  );
};

export default BottomHeroImg;
