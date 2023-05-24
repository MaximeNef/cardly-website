import FeatureCards from "../../shared/FeatureCards/FeatureCards";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

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
      description: "indépendant/start-up aux entreprises en développement",
    },
    {
      title: "Achat unique !",
      src: "/assets/img/hexagone.svg",
      description: "acheter votre carte et bénéficier des services !",
    },
  ];
  return (
    <div className="md:mx-[25px]">
      <div className=' mb-6 mx-[10px] '>
        <SectionTitle
          title='A Propos'
          subTitle='En Savoir Plus Sur Cardly'
          description="Cardly est plus qu'une carte digitale, elle résout tous les problèmes. Voici certains de ses avantages"
          number='02'
        />
      </div>
      <div className="mt-[140px] md:flex flew-row md:justify-between mx-[10px] ">
        <FeatureCards isShown={true} gridLayout={false}  features={features} hasMargin={true} />
      </div>
    </div>
  );
};

export default About;
