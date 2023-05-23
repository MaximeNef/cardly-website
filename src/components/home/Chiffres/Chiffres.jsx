import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ExperienceCards from "./ExperienceCards/ExperienceCards";

const Chiffres = () => {
  return (
    <div className='mb-[400px] md:mb-0 md:mt-[140px] h-[960px]  my-24 relative mx-[10px] md:mx-[25px]'>
      <SectionTitle
        title='En Chiffres'
        subTitle='Cardly En Un Coup De Carte'
        number='03'
      />{" "}
      <div className='absolute top-[350px] md:top-[300px] w-full md:mx-[-25px]'>
        <ExperienceCards />
      </div>{" "}
    </div>
  );
};

export default Chiffres;
