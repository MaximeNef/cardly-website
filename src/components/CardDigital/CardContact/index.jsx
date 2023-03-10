import Image from "next/image";
import Link from "next/link";

const CardContact = ({ contactInfo, color }) => {
  return (
    <div
      className={` my-10 flex flex-row mx-[22px] items-center shadow-apple  rounded-[10px] h-[150px]  ${color}`}
    >
      <div
        className={`relative h-[100px] w-[48%]  rounded-[10px] ${
          color == "bg-white"
            ? "bg-white"
            : "bg-gradient-to-r from-[#FFF] to-[#283445]"
        }`}
      >
        <Image
          src='/assets/logo/CardlyLogo.svg'
          objectFit={"contain"}
          fill
          className='mt-[10px]'
        />
      </div>
      <div
        className={`flex flex-col pl-2  justify-evenly  ${
          color == "bg-white" ? "text-[#283445]" : "text-white "
        }`}
      >
        <div>{contactInfo.nom}</div>
        <div>{contactInfo.tel}</div>
        <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
        <div className='text-[10px] underline underline-offset-1'>
          enregister dans vos contact
        </div>
      </div>
    </div>
  );
};
export default CardContact;
