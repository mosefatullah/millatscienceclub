import { Helmet } from "react-helmet";
import panels from "../utils/panels.json";

function PanelAdvisor() {
 return (
  <div>
   <Helmet>
    <title>Panel - Advisor</title>
    <meta name="description" content="The advisors of the club." />
   </Helmet>
   <div className="w-full max-w-7xl mx-auto dark:bg-primary/50 backdrop-blur-xl px-8 py-18 xl:py-[5rem]">
    <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
     Advisors Panel
    </h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
     {panels &&
      panels.advisors.map((v, i) => (
       <div
        className="__topToBottom border border-gray-400/50 dark:border-gray-700/30 bg-gray-500/10 dark:bg-gray-700/20 rounded-xl"
        key={i}
       >
        <img
         src={"/images/person/" + v.pic}
         alt={v.name}
         className="w-full aspect-square object-cover rounded-t-xl"
        />
        <div className="p-4 lg:p-6 flex flex-col justify-center text-center">
         <h3 className="font-bold sm:text-xl sm:mb-2">{v.name}</h3>
         <p className="text-blue-800 dark:text-blue-300">{v.inst}</p>
         <p className="text-blue-800 dark:text-blue-300 italic text-xs sm:text-sm">
          {v.batch}
         </p>
        </div>
       </div>
      ))}
    </div>
   </div>
  </div>
 );
}

export default PanelAdvisor;
