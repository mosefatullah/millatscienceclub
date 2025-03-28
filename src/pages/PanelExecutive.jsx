import { Helmet } from "react-helmet";
import panels from "../utils/panels.json";

export default function PanelExecutive() {
 return (
  <div>
   <Helmet>
    <title>Panel - Executives</title>
    <meta name="description" content="The executive panel of the club." />
   </Helmet>
   <div className="w-full max-w-7xl mx-auto dark:bg-primary/50 backdrop-blur-xl px-8 py-15 xl:py-[5rem]">
    <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
     Main Panel (2025-26)
    </h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
     {panels.executives &&
      panels.executives.main.map((v, i) => (
       <div
        className="__topToBottom border border-gray-400/40 dark:border-gray-700/30 bg-gray-500/5 dark:bg-gray-700/20 rounded-xl"
        key={i}
       >
        <img
         src={"/images/person/" + v.pic}
         alt={v.name}
         className="w-full aspect-square object-cover rounded-t-xl"
        />
        <div className="p-4 lg:p-6 flex flex-col justify-center text-center">
         <h3 className="font-bold sm:text-xl sm:mb-2">{v.name}</h3>
         <p className="text-blue-800 dark:text-blue-300 text-xs sm:text-sm">
          {v.role}
         </p>
        </div>
       </div>
      ))}
    </div>

    <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mt-12 mb-8 md:mb-12">
     Executives (2025-26)
    </h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
     {panels &&
      panels.executives.others.map((v, i) => (
       <div
        className="__topToBottom border border-gray-400/40 dark:border-gray-700/30 bg-gray-500/5 dark:bg-gray-700/20 rounded-xl"
        key={i}
       >
        <img
         src={"/images/person/" + v.pic}
         alt={v.name}
         className="w-full aspect-square object-cover rounded-t-xl"
        />
        <div className="p-4 lg:p-6 flex flex-col justify-center text-center">
         <h3 className="font-bold sm:text-xl sm:mb-2">{v.name}</h3>
         <p className="text-blue-800 dark:text-blue-300 text-xs sm:text-sm">
          {v.role}
         </p>
        </div>
       </div>
      ))}
    </div>
   </div>
  </div>
 );
}
