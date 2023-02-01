import Image from "next/image";
import GradientLink from "../../shared/GradientLink/GradientLink";

const BusinessFuture = () => {
  return (
    <div className='bg-black mt-[120px] text-white w-full relative'>
      <div
        className='ml-5 mr-[60px] relative z-20 pt-8 text-[28px] tracking-[-0.085px]  leading-[40px] font-[1000]
       '
      >
        Transformez votre partage d'informations avec Cardly
      </div>
      <div className=' h-[260px] w-[270px] z-10 right-0 bottom-[80px] absolute'>
        <Image src='/assets/img/card.svg' fill alt='your card' />
      </div>
      <div className='mt-[180px] pb-8 '>
        <GradientLink href='/waitlist' text="rejoindre la liste d'attente" />
      </div>
    </div>
  );
};

export default BusinessFuture;
