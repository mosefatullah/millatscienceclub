import { Helmet } from "react-helmet";

export default function PanelExecutive() {
 return (
  <div>
   <Helmet>
    <title>Panel - Executives</title>
    <meta name="description" content="The executive panel of the club." />
   </Helmet>
   <div className="w-full max-w-7xl mx-auto dark:bg-primary/50 backdrop-blur-xl px-8 py-18 xl:py-[5rem]">
    <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
     Main Panel (2025-26)
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
     {[
      {
       name: "Ahmed Adnan Mujahid",
       role: "President",
       pic: "6GJJHJGHJG.jpg",
      },
      {
       name: "Sudais Mahmud Chowdhury",
       role: "General Secretary",
       pic: "dfgdf025gJGJ.jpg",
      },
      {
       name: "Nurul Azam Tasnif",
       role: "Chief Administrator",
       pic: "025-03-11adsfdsfsdf.jpg",
      },
     ].map((v, i) => (
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
        <h3 className="font-bold text-2xl mb-2">{v.name}</h3>
        <p className="text-blue-800 dark:text-blue-300">{v.role}</p>
       </div>
      </div>
     ))}
    </div>

    <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold my-12">
     Executives (2025-26)
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
     {[
      {
       name: "Ubaidullah Jabir",
       role: "Head of Planning and Development",
       pic: "7GYUJGJUYG.jpg",
      },
      {
       name: "Md Shariful Islam Sami",
       role: "Secretary of Planning and Development",
       pic: "1742290628048.jpg",
      },
      {
       name: "Mohammad Sefatullah",
       role: "Head of IT",
       pic: "07086463089198.jpg",
      },
      {
       name: "Sadman Said Safi",
       role: "Head of Marketing and Promotion",
       pic: "1742227139060.jpg",
      },
      {
       name: "Mosleh Uddin",
       role: "Head of Communication and Affairs",
       pic: "1742402694269.jpg",
      },
     ].map((v, i) => (
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
        <h3 className="font-bold text-2xl mb-2">{v.name}</h3>
        <p className="text-blue-800 dark:text-blue-300">{v.role}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}
