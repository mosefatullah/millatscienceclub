import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../utils/data";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

function ResourceById() {
 const { id } = useParams();
 const [resource, setResource] = useState([]);

 useEffect(() => {
  fetch(api + "/resource/" + id)
   .then((response) => response.json())
   .then((d) => setResource(d.data))
   .catch((error) => {});
 }, [id]);

 return (
  <div className="w-full max-w-3xl mx-auto mt-10 mb-12">
    <Helmet>
        <title>{(resource && resource.title) || "Resource -"}</title>
    </Helmet>
   <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
    <img
     className="w-full h-60 sm:h-72 lg:h-96 object-cover bg-gray-300 dark:bg-gray-700"
     src={(resource && resource.thumbnail_url) || "/msc.jpg"}
     alt="Resource"
    />

    <div className="p-6">
     <h5 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
      {(resource && resource.title) || "Error occurred"}
     </h5>

     <a
      href={resource && resource.url}
      className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      hidden={!resource?.url}
     >
      Details
     </a>

     <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg mt-12 break-words whitespace-pre-wrap">
      <ReactMarkdown>
       {String(
        (resource?.description || "No description available.").replace(
         /^\s+/gm,
         "\n"
        )
       )}
      </ReactMarkdown>
     </p>

     <div className="flex flex-wrap gap-2 mt-4">
      {resource.tags &&
       resource.tags.split(",").map((tag) => (
        <span
         key={tag}
         className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-300"
        >
         {tag}
        </span>
       ))}
     </div>
    </div>
   </div>
  </div>
 );
}

export default ResourceById;
