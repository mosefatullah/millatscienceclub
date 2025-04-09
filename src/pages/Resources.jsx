import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { api } from "../utils/data";
import { Link } from "react-router";

function Resources() {
 const [resources, setResources] = useState([]);

 useEffect(() => {
  fetch(api + "/resource/list")
   .then((response) => response.json())
   .then((d) => setResources(d.data));
 }, []);
 return (
  <div>
   <Helmet>
    <title>Resources</title>
    <meta name="description" content="The resources provided by the club." />
   </Helmet>

   <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-10 mb-5">
    Resources
   </h1>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-4 mx-auto max-w-6xl mb-12">
    {Array.isArray(resources) &&
     resources.map((r) => (
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
       <img
        class="rounded-t-lg aspect-[16/9] h-48 w-full object-cover bg-gray-300 dark:bg-gray-700"
        src={r.thumbnail_url || "/msc.jpg"}
        alt=""
       />
       <div class="p-5">
        <Link to={`/activity/resource/${r.id}`}>
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline-offset-4 underline decoration-blue-500/50 decoration-2">
          {r.title || "Error occured"}
         </h5>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {r.description || "No description available."}
         </p>
         <div class="flex flex-wrap gap-2 mb-4">
          {Array.isArray(r.tags) &&
           r.tags.map((tag) => (
            <span
             key={tag}
             class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-300"
            >
             {tag}
            </span>
           ))}
         </div>
        </Link>
        <a
         href={r.url}
         hidden={!r.url}
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         View Details
        </a>
       </div>
      </div>
     ))}
   </div>
  </div>
 );
}

export default Resources;
