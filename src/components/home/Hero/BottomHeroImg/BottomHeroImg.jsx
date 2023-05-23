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
    <div className=' md:mt-[-30px] relative z-10'>
      <div className="flex">
        <div
          className='m-auto px-[100px]'>
            <Image src="./assets/img/threeCards.svg" alt="three Cards" width={800} height={200} />
        </div>
   
      </div>


        <div className="relative z-10 w-auto  ">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="absoluteCenter" dangerouslySetInnerHTML={{ __html: decouvrir }} />
          </div>

          <div className="w-full bg-transparent  z-20 relative bottom-[10px]">
            <div id="circle" className=" absolute left-1/2 transform -translate-x-1/2">
            </div>
          </div>
        </div>

        
      </div>




  );
};

export default BottomHeroImg;
