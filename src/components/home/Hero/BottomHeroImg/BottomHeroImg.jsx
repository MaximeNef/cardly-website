import { decouvrir, rounded, threeCards } from "./svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import Image from "next/image";

const BottomHeroImg = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, 1, { opacity: 1, y: -215 }, { opacity: 0, y: 100 });
  }, []);

  return (
    <div className='mt-[-100px] relative z-10'>
      <div className="flex">
        <div
          className='m-auto'>
            <Image src="./assets/img/threeCards.svg" alt="three Cards" width={900} height={500} />
        </div>
   
      </div>

      <div className='relative z-10  w-auto'>
        <div id="circle" className="  ">
          <div
            className="absoluteCenter  "
                        dangerouslySetInnerHTML={{
              __html: decouvrir,
            }}
          />

        </div>

        <div className=" w-full  bg-backgroundWhite " id="margin"
          dangerouslySetInnerHTML={{
            __html: rounded,
          }}
        />
      </div>

    </div>
  );
};

export default BottomHeroImg;
