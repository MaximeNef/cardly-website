import BottomHeroImg from "./BottomHeroImg/BottomHeroImg";
import EmailInput from "./EmailInput/EmailInput";
import HeroHeader from "./HeroHeader/HeroHeader";

const Hero = () => {
  return (
    <div className='pt-[130px]  bg-black text-white w-full mx-auto'>
      <HeroHeader />
      <EmailInput />

      <div className='mt-48 '>
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
