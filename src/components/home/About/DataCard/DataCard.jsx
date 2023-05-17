import RegularLink from "../../../shared/RegularLink/RegularLink";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DataCard = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (

      <div className='pb-14'>
        <RegularLink  isTextColored={true} isBlack={true} hasClipText={true} href='/waitlist' />
      </div>
    
  );
};

export default DataCard;
