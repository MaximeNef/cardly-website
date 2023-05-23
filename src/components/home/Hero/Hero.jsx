import BottomHeroImg from "./BottomHeroImg/BottomHeroImg";

import HeroHeader from "./HeroHeader/HeroHeader";


const Hero = () => {


  return (
    <div className=' m-auto   text-white w-full  relative z-50'>
      <div className="pt-[130px] bg-blackCards  rounded-t-none rounded-[60px] mx-[10px] md:mx-[25px]"  >


        <HeroHeader />
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
