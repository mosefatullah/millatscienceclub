function PanelAdvisor() {
 return (
  <div>
   <div className="w-full max-w-7xl mx-auto dark:bg-primary/50 backdrop-blur-xl px-8 py-18 xl:py-[5rem]">
    <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
     Advisors Panel
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
     {[
      {
       name: "Abdur Rahman",
       inst: "Vice President of Tamirul Millat Students' Union",
       batch: "",
       pic: "w3T1Z7H7.jpg",
      },
      {
       name: "Md Tufayel Ahmed",
       inst: "General Secretary of Tamirul Millat Students' Union",
       batch: "",
       pic: "0E54959999.jpeg",
      },
      {
       name: "Md Hasan Sarder",
       inst: "Former President of Millat Science Club",
       batch: "Alim'23",
       pic: "159558794212054.jpg",
      },
      {
       name: "Saad Al Amin",
       inst: "Knox College, USA",
       batch: "Alim'23",
       pic: "6772925612301.jpg",
      },
      {
       name: "Shaifullah Maruf",
       inst: "Dhaka City College",
       batch: "Dakhil'22",
       pic: "shaiu877.jpg",
      },
      {
       name: "Md Irfan Hasan Fahim",
       inst: "Full Stack Web Developer",
       batch: "Alim'23",
       pic: "FiC2dkCZ.jpg",
      },
      {
       name: "Kazi Shoaib Hasan",
       inst: "Jahangirnagar University",
       batch: "Alim'24",
       pic: "BpaTCYjt.jpg",
      },
     ].map((v, i) => (
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
        <h3 className="font-bold text-2xl mb-2">{v.name}</h3>
        <p className="text-blue-800 dark:text-blue-300">{v.inst}</p>
        <p className="text-blue-800 dark:text-blue-300 italic text-sm">
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
