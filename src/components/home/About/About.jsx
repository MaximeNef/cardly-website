import FeatureCards from "../../shared/FeatureCards/FeatureCards";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import DataCard from "./DataCard/DataCard";

const About = () => {
  const features = [
    {
      title: "Data Tracking",
      src: "/assets/img/hexagone.svg",
      description: "garder un oeil sur les visite de votre carte digital",
    },
    {
      title: "Pour Tous ",
      src: "/assets/img/hexagone.svg",
      description: "indépendant/start-up aux entreprise en développement",
    },
    {
      title: "Achat unique !",
      src: "/assets/img/hexagone.svg",
      description: "acheter votre carte et bénéficier des services !",
    },
  ];
  return (
    <div>
      <div className='mb-6'>
        <SectionTitle
          title='A Propos'
          subTitle='En Savoir Plus Sur Cardly'
          description="Cardly est plus qu'une carte digital, elle résoud tous les problème. voici certain de ses avantages"
          number='02'
        />
      </div>
      <FeatureCards features={features} />
      {/* <DataCard /> */}
    </div>
  );
};

export default About;
