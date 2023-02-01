import { decouvrir, rounded, threeCards } from "./svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";

const BottomHeroImg = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, 1, { opacity: 1, y: -215 }, { opacity: 0, y: 100 });
  }, []);

  return (
    <div className='relative z-10'>
      <div ref={boxRef}>
        <div
          className='absoluteCenter top-[100px]'
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
