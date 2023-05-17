import Link from 'next/link';

const RegularLink = ({ href, isBlack, isTextColored }) => {
  return (
    <div className="z-50 w-fit">
      <Link href={href}>
        <div className={`${ isBlack ? 'bg-blackCards' : 'purpleGradient'} rounded-[50px] w-[200px] h-[62px] pt-[14px] px-5 text-base uppercase text-center leading-[18px]`}>
        <div className={`${isTextColored ? 'bg-clip-text purpleGradient text-transparent ' : 'text-white'}  `} >
            <div>rejoindre la liste d&apos;attente</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RegularLink;
