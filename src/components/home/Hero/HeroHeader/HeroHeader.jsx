import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import EmailInput from "../EmailInput/EmailInput";

const HeroHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className=' text-ABeeZeeItalic mx-[10px] md:mx-[5%] flex-col  md:flex md:flex-row justify-between'>
      <div>
        <p className=" font-normal text-[30px] md:text-[40px]  md:w-[450px] md:mb-[50px] leading-11">
            Une solution complète de cartes de visite virtuelles conçues 
            pour votre entreprise
        </p>
        <div className="m-auto">
          <EmailInput />

        </div>
      </div>
      <div className=" w-auto mb-[100px] md:mb-0 md:max-w-[220px] flex flex-row justify-between md:flex md:flex-col ">
          <div className="mb-0 md:mb-[25px] ">
                <p className="text-[30px] md:text-[40px]">500K +</p>
                <p className="text-[14px] md:text-[20px] ">Personnes se sont déjà enregistrées</p>
          </div>
          <div className="mb-0 md:mb-[25px]">
                <p className="text-[30px] md:text-[40px]">20M +</p>
                <p className="text-[14px] md:text-[20px]">Nombres de cartes papier remplacées</p>
          </div>
          <div className="mb-0 md:mb-[25px]">
                <p className="text-[30px] md:text-[40px]">80% + €</p>
                <p className="text-[14px] md:text-[20px]">D’économies réalisées par inscrit</p>
          </div>
      </div>

 

    </div>
    
    
  );
};

export default HeroHeader;
