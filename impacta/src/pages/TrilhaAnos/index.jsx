import { useEffect, useState } from "react";
import TrilhaAnosMobile from "../../components/TrilhaAnosMobile";
import TrilhaAnosDesktop from "../../components/TrilhaAnosDesktop";

const TrilhaAnos = () => {
   // Que código criminoso!
   const [isMobile, setIsMobile] = useState(1);

   useEffect(() => {
      //
      const handleResize = () => {
         if (window.innerWidth <= 980) {
            setIsMobile(2);
         } else {
            setIsMobile(1);
         }
      };
      //
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
      //
   }, []);

   return (
      <section className="w-full h-[140vh] bg-fundoSecundario flex justify-end">
         {isMobile == 2 ? <TrilhaAnosMobile /> : <TrilhaAnosDesktop />}
      </section>
   );
};
export default TrilhaAnos;
