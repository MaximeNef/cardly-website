import Link from "next/link";

const BoutonCTA = ({ btnCta, current }) => {
  return (
    <>
      <Link href={btnCta.link}>
        <div
          className={`mx-[25px] mb-[20px]  text-center text-[20px] font-medium tracking-wide leading-[25px] py-[22px] rounded-[10px] ${
            current
              ? "purpleGradient text-white"
              : "bg-gradient-to-r from-[#939393] to-[#455A64] text-white"
          }`}
        >
          {btnCta.text}
        </div>
      </Link>
    </>
  );
};
export default BoutonCTA;
