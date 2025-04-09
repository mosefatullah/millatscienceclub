import { Helmet } from "react-helmet";
import { achievements } from "../utils/data";

function Achievements() {
 return (
  <>
   <Helmet>
    <title>Achievements</title>
    <meta name="description" content="The achievements of the club." />
   </Helmet>
   <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-10 mb-5">
    Achievements
   </h1>
   <section className="container mx-auto px-4 py-8 mb-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {achievements.map((achievement, index) => (
      <div
       key={index}
       className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      >
       <img
        src={achievement.image}
        alt={achievement.title}
        className="w-full h-48 object-cover"
       />
       <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
         {achievement.title}
        </h2>
       </div>
      </div>
     ))}
    </div>
   </section>
  </>
 );
}

export default Achievements;
