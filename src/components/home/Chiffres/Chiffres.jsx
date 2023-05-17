import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ExperienceCards from "./ExperienceCards/ExperienceCards";

const Chiffres = () => {
  return (
    <div className='md:mt-[100px] h-[960px]  my-24 relative md:mx-[25px]'>
      <SectionTitle
        title='En Chiffres'
        subTitle='Cardly En Un Coup De Carte'
        number='03'
      />{" "}
      <div className='absolute sm:top-[218px] md:top-[300px] w-full md:mx-[-25px]'>
        <ExperienceCards />
      </div>{" "}
    </div>
  );
};

export default Chiffres;
