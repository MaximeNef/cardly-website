import BottomHeroImg from "./BottomHeroImg/BottomHeroImg";
import EmailInput from "./EmailInput/EmailInput";
import HeroHeader from "./HeroHeader/HeroHeader";

const Hero = () => {
  return (
    <div className='pt-[130px]  bg-blackCards text-white w-full mx-auto  relative z-50'>
      <HeroHeader />
      <EmailInput />
      <BottomHeroImg />
    </div>
  );
};

export default Hero;
