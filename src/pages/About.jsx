import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { topToBottom } from "../utils/anims";

function About() {
 useEffect(() => {
  topToBottom();
 }, []);
 return (
  <>
   <Helmet>
    <title>About Us</title>
    <meta
     name="description"
     content="Millat Science Club is dedicated to fostering scientific curiosity and innovation among students and science enthusiasts."
    />
   </Helmet>
   <div className="_about-1">
    <div className="w-full border border-gray-700/20 dark:border-gray-100/20 bg-primary/5 dark:bg-primary/50 backdrop-blur-xl grid xl:grid-cols-2">
     <div className="px-4 sm:px-8 py-18 xl:py-[10rem] border-b-1 xl:border-b-0 xl:border-r-1 border-gray-700/20 dark:border-gray-100/20">
      <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
       About Millat Science Club
      </h3>
      <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
       Founded in 2016, Millat Science Club, based at Ta'mirul Millat kamil
       Madrasah in Bangladesh, is dedicated to fostering scientific curiosity
       and innovation among students and science enthusiasts.
      </p>
      <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
       We believe that science education should be accessible, engaging, and
       fun. Our diverse community includes students, educators, researchers, and
       science enthusiasts who come together to share knowledge, collaborate on
       projects, and inspire the next generation of scientists.
      </p>
     </div>
     <div className="px-4 sm:px-8 py-18 xl:py-[10rem] flex flex-col items-center">
      <h3 className="__topToBottom text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
       Our Vision
      </h3>
      <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
       "To spread science from generation to generation and to achieve an
       Islamic revolution through science"
      </p>
      <h3 className="__topToBottom text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
       Our Motto
      </h3>
      <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
       "Explore, learn, and innovate together!"
      </p>
     </div>
    </div>
   </div>
  </>
 );
}

export default About;
