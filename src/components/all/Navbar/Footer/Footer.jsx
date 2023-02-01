import Link from "next/link";
import GradientLink from "../../../shared/GradientLink/GradientLink";

const Footer = () => {
  return (
    <div className='relative bottom-0 w-full px-10 pt-10 pb-4 text-center text-white bg-black'>
      <p className='text-xl leading-[30px] mb-[50px]'>
        Reste connect avec ta futur Card digitale
      </p>
      <div className='mb-[40px]'>
        <GradientLink href='/waitlist' text="rejoindre la liste d'attente" />
      </div>
      <p className='text-[12px] '>
        2022 © Cardly | Designed with passion by{" "}
        <span className='underline'>
          <Link href='https://listri.digital/' target='_blank'>
            Listri
          </Link>{" "}
        </span>
      </p>
    </div>
  );
};

export default Footer;
