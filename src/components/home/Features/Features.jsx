import FeatureCards from "../../shared/FeatureCards/FeatureCards";
import RegularLink from "../../shared/RegularLink/RegularLink";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import DataCard from "../About/DataCard/DataCard";

const Features = () => {
  const features = [
    {
      title: "Partage facile",
      src: "/assets/img/hexagone.svg",
      description:
        "Une diffusion rapide et efficace de vos informations au répertoire.",
    },
    {
      title: "Personnalisation",
      src: "/assets/img/hexagone.svg",
      description:
        "Votre photo, logo et couleurs de marque, champs d'informations, ect.. .",
    },
    {
      title: "Accessibilité",
      src: "/assets/img/hexagone.svg",
      description: "Consultez sur n'importe quel appareil connecté",
    },
    {
      title: "Notification en temps réel",
      src: "/assets/img/hexagone.svg",
      description:
        "Permet de suivre les leads et de recevoir des alertes en cas d'action.",
    },
  ];
  return (
    <div className='mb-[130px] relative  '>
      <div className='mb-14  '>
        <SectionTitle
          title='Fonctionnalités'
          subTitle='Meilleures features fournies par Cardly.'
          description='Les cartes digitales améliorent la communication et renforcent votre image de marque. Avec leurs fonctionnalités intuitives et personnalisables, elles sont le choix des professionnels soucieux de leur image et de leur visibilité.'
          number='01'
        />
      </div>
      <div className='mb-[50px]'>
        <FeatureCards features={features} />
      </div>
      {/* <RegularLink href='/waitlist' black /> */}
      <DataCard />
    </div>
  );
};

export default Features;
