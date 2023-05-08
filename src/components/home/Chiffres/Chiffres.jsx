import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ExperienceCards from "./ExperienceCards/ExperienceCards";

const Chiffres = () => {
  return (
    <div className='h-[960px] my-24 relative'>
      <SectionTitle
        title='En Chiffres'
        subTitle='Cardly En Un Coup De Carte'
        number='03'
      />{" "}
      <div className='absolute top-[218px] w-full'>
        <ExperienceCards />
      </div>{" "}
    </div>
  );
};

export default Chiffres;
