import Image from "next/image";
import Link from "next/link";

const Reseaux = () => {
  return (
    <div className='mx-[25px]'>
      <div className='flex flex-row items-center' align='center'>
        <h2 className='text-[20px] font-light '>réseaux </h2>
        <div className='w-full h-[1px] ml-1 bg-[#B4B4B4]' />
      </div>
      <div className='space-x-[32px] my-[22px] flex'>
        <div>
          <Link
            href='https://www.linkedin.com/company/listri-agence-digitale/'
            target='_blank'
          >
            <Image
              src='/assets/logo/linkedinBusiness.svg'
              width={"40"}
              height={"40"}
            />
          </Link>
        </div>
        <div>
          <Link
            href='https://www.instagram.com/listri.digital/'
            target='_blank'
          >
            <Image
              src='/assets/logo/instagramBusiness.svg'
              width={"40"}
              height={"40"}
            />{" "}
          </Link>
        </div>
        <div>
          <Link href='https://www.facebook.com/Listri.digital' target='_blank'>
            <Image
              src='/assets/logo/facebookBusiness.svg'
              width={"40"}
              height={"40"}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Reseaux;
