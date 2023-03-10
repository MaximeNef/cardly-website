import Link from "next/link";

const HeaderLink = () => {
  return (
    <div className='relative'>
      <Link href='/waitlist'>
        <div className='bg-white absoluteCenter left-[-78px] z-20 rounded-[50px] w-[155px] h-[50px] pt-3 px-5 text-sm font-medium uppercase text-center leading-[14px]'>
          <div className='text-transparent bg-clip-text purpleGradient '>
            rejoindre la liste d'attente
          </div>
        </div>
        <div className='absoluteCenter left-[-78px] w-[164px] h-[58px] blur-sm purpleGradient rounded-[50px]' />
      </Link>
    </div>
  );
};

export default HeaderLink;
