import Head from "next/head";
import Image from "next/image";

import React from "react";
import BoutonCTA from "../../components/CardDigital/boutonCTA";
import CardContact from "../../components/CardDigital/CardContact";
import Reseaux from "../../components/CardDigital/reseaux";

const Nom = () => {
  const contactInfo = {
    img: "/assets/logo/julien.png",
    nom: "Nom & Prénom",
    tel: "04xx.xx.xx.xx",
    email: "contact@cardly.be",
  };
  const socials = [
    {
      src: "/assets/logo/fbContact.svg",
      nom: "Facebook",
      link: "https://www.facebook.com/Listri.digital",
    },
    {
      src: "/assets/logo/instaContact.svg",
      nom: "Instagram",
      link: "https://www.instagram.com/listri.digital/",
    },
    {
      src: "/assets/logo/LkdContact.svg",
      nom: "Linkedin",
      link: "https://www.linkedin.com/company/listri-agence-digitale/",
    },
  ];
  const btnCtaS = [
    {
      text: "APPELEZ-MOI",
      link: "tel:0470684551",
    },
    {
      text: "VISITEZ NOTRE SITE",
      link: "/",
    },
    {
      text: "DÉCOUVREZ NOS SERVICES",
      link: "/services",
    },
    {
      text: "VISITES VIRTUELLES",
      link: "https://www.immersy.be/",
    },
    {
      text: "PRENEZ RENDEZ-VOUS",
      link: "https://meetings-eu1.hubspot.com/julien-nef",
    },
  ];

  return (
    <div className=''>
      <Head>
        <title>Listri Agence Digitale</title>
        <meta name='description' content='find the best for you' />
        <meta charset='UTF-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className=' bg-white  text-[#37474F] z-20 '>
        {" "}
        <div className=' h-[200px] pt-[20px]  bg-white/0'>
          <div className='mx-6 h-[200px] relative'>
            <Image src='/assets/logo/Cardly.svg' fill alt='your card' />
          </div>
        </div>{" "}
        <div className=''>
          <CardContact contactInfo={contactInfo} color={"bg-white"} />
          <Reseaux socials={socials} />
          {btnCtaS.map((btnCta, i) => {
            return <BoutonCTA key={i} btnCta={btnCta} current={true} />;
          })}{" "}
          <div className='absolute  w-full h-full top-[36%]  z-[-10] '>
            <Image src='/assets/logo/Cardly.svg' fill />
          </div>
        </div>{" "}
      </main>{" "}
    </div>
  );
};
export default Nom;
