import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import EmailInput from "../EmailInput/EmailInput";

const HeroHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className='text-ABeeZeeItalic mx-[120px] flex flex-row justify-between'>
      <div>
        <p className=" font-normal text-[40px] w-[450px] mb-[50px] leading-11">
            Une solution complète de cartes de visite virtuelles conçue 
            pour votre entreprise
        </p>
        <EmailInput />
      </div>
      <div>
          <div className="mb-[25px]">
                <p className="text-[40px]">500K +</p>
                <p className="text-[20px] ">Personnes se sont déjà enregistrées</p>
          </div>
          <div className="mb-[25px]">
                <p className="text-[40px]">20M +</p>
                <p className="text-[20px]">Nombres de cartes papier remplacées</p>
          </div>
          <div className="mb-[25px]">
                <p className="text-[40px]">80% + €</p>
                <p className="text-[20px]">D’économies réalisées par inscrit</p>
          </div>
      </div>

    </div>
  );
};

export default HeroHeader;
