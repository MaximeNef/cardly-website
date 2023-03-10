import RegularLink from "../../../shared/RegularLink/RegularLink";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DataCard = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className='text-center purpleGradient rounded-[20px] mx-6 mt-[24px]'>
      <div className='pt-10 mb-14'>
        <p
          data-aos='fade-up'
          className='text-3xl  text-white leading-[38px] mx-[21px]'
        >
          Toutes Tes Données
        </p>
        <p
          data-aos='fade-up'
          className='text-3xl text-white leading-[38px] mx-[24px]'
        >
          Dans Une Seule Carte&nbsp;☝️
        </p>
      </div>
      <div className='pb-14'>
        <RegularLink href='/waitlist' />
      </div>
    </div>
  );
};

export default DataCard;
