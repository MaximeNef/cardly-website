import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = () => {
  return (

    <div className='flex justify-between items-center w-full fixed h-[70px] px-[20px] top-0 bg-darkGrey/[.96] z-[99]' >
      <div>
        <Link href='/'>
          <Image
            src='/assets/logo/Cardly.svg'
            width={120}
            height={94}
            alt='logo'
          />
        </Link>
      </div>
      <HeaderLink />
    </div>
  );
};

export default Header;
