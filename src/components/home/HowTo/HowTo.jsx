import Image from "next/image";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const HowTo = () => {
  return (
    <div className='mb-32'>
      <SectionTitle
        title='How To'
        subTitle='Comment fonctionne Cardly'
        description="Les cartes digitales permet de partager facilement et efficacement les informations de contact. Elles peuvent être personnalisées pour inclure des informations dont vous avez besoins.

       dotées d'un code QR ou d'une puce NFC l'utilisateur est immédiatement redirigé vers la carte digitale, permettant un accès facile et rapide aux informations de contact.
        "
        number='02'
      />
      <div className='mt-[50px] bg-[#E8E8E7] relative'>
        <div className='text-center text-[28px] font-ABeeZeeItalic leading-8 pt-10 pb-[150px]'>
          <p className='text-black'>Comment fonctionne</p>
          <p className='mx-auto text-transparent bg-clip-text purpleGradient w-fit'>
            Cardly
          </p>
        </div>
        <div className='absoluteCenter'>
          <Image src='/assets/img/play.svg' height={81} width={81} alt='play' />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
