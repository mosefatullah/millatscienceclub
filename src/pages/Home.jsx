import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Info, Moon, PencilRuler, Users } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router";
import { topToBottom } from "../utils/anims";
import Typewriter from "typewriter-effect/dist/core";
import AccordionItem from "../components/Accordion";
import { Helmet } from "react-helmet";
import { achievements, api } from "../utils/data";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

function Home() {
 const typewriterRef = useRef(null);
 const [latestEvent, setLatestEvent] = useState(null);
 const typeFade = useRef(null);
 useEffect(() => {
  topToBottom();
  if (window.innerWidth > 640 && typewriterRef.current) {
   const typewriter = new Typewriter(typewriterRef.current, {
    strings: ["Science!", "Muslim Scientists!", "Students!"],
    autoStart: true,
    loop: true,
    delay: 100,
   });
   typewriter.start();
  }
 }, []);

 const [currentIndex, setCurrentIndex] = useState(0);
 const texts = ["Wonder", "Achievements", "Potential"];

 useEffect(() => {
  const interval = setInterval(() => {
   if (window.innerWidth > 640) {
    if (typeFade.current) {
     typeFade.current.classList.add("opacity-50");
     setTimeout(() => {
      if (typeFade.current) {
       typeFade.current.classList.remove("opacity-50");
      }
     }, 1000);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
   }
  }, 4100);

  return () => clearInterval(interval);
 }, [texts.length]);

 const [openItem, setOpenItem] = useState(null);

 const toggleAccordion = (id) => {
  setOpenItem(openItem === id ? null : id);
 };

 const accordionData = [
  {
   id: 1,
   title: "What is Tamirul Millat Kamil Madrasah known for?",
   content: (
    <>
     Tamirul Millat Kamil Madrasah is a well-established educational institution
     dedicated to providing quality Islamic and academic education. The
     institution focuses on nurturing the intellectual, spiritual, and social
     development of its students. We aim to equip our students with the skills
     needed to contribute positively to society while upholding Islamic values.
    </>
   ),
  },
  {
   id: 2,
   title: "Why should I join the Millat Science Club?",
   content: (
    <>
     The Millat Science Club offers a unique opportunity for students to explore
     the fascinating world of science through hands-on activities, workshops,
     and events. By joining the club, you will have the chance to develop your
     scientific knowledge and skills, collaborate with like-minded peers, and
     participate in exciting projects and competitions. Whether you are
     passionate about biology, chemistry, physics, or any other scientific
     field, the Millat Science Club provides a supportive and engaging
     environment for you to learn, grow, and have fun!
    </>
   ),
  },
  {
   id: 3,
   title: "How can I join the Millat Science Club?",
   content: (
    <>
     To join the Millat Science Club, you can visit our club office located at
     the school premises or contact our club representatives through the school
     notice board. We welcome students from all grades who have a passion for
     science and want to participate in our various activities. You can also
     register online through our official website at{" "}
     <Link to="/register" className="text-blue-600 dark:text-blue-400">
      mscbd.org/register
     </Link>{" "}
     for a more convenient signup process.
    </>
   ),
  },
 ];

 useEffect(() => {
  fetch(api + "/event/latest")
   .then((response) => response.json())
   .then((d) => {
    setLatestEvent(d.data);
   })
 }, []);

 return (
  <>
   <Helmet>
    <title>Millat Science Club | মিল্লাত সাইন্স ক্লাব</title>
    <meta
     name="description"
     content="Join Millat Science Club to explore, experiment, and expand your scientific knowledge."
    />
   </Helmet>
   <div className="relative _hero w-full min-h-[86vh]">
    <div className="anims max-w-[100vw]">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="hidden lg:block size-12 text-emerald-300 absolute top-3 left-3 animate-[3s_var(--animate-spin),3s_var(--animate-pulse)]"
     >
      <path
       fill="currentColor"
       d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"
      ></path>
     </svg>
     {[...Array(150)].map((_, i) => (
      <div
       key={i}
       className="size-[1.5px] bg-white absolute transition-all delay-75 opacity-50"
       style={{
        top: `${Math.random() * 100}%`,
        left: `calc(${Math.random() * 100}% - 50px)`,
       }}
      ></div>
     ))}
    </div>
    <div className="lg:flex relative lg:h-[86vh]">
     <div className="w-full lg:w-[55%] h-full px-4 sm:px-8 py-12 flex flex-col justify-center">
      <span className="text-blue-500 dark:text-blue-400 __topToBottom mb-4 font-semibold text-lg sm:text-xl">
       WELCOME TO MSC
      </span>
      <h1 className="__topToBottom text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
       Discover the{" "}
       <span className="fade-text dark:text-gray-400" ref={typeFade}>
        {texts[currentIndex]}
       </span>{" "}
       <br className="hidden lg:block" />
       of{" "}
       <span ref={typewriterRef} className="inline dark:text-gray-400">
        Science!
       </span>
      </h1>
      <p className="__topToBottom xl:text-lg mb-8 text-gray-600 dark:text-gray-400">
       Join Millat Science Club to explore, experiment, and expand your
       scientific knowledge through hands-on activities and engaging events.
      </p>
      <div className="__topToBottom">
       <Link to="/activity/events">
        <Button dark className="py-3 sm:px-7 sm:text-[1.1rem]">
         Explore Events
        </Button>
       </Link>
      </div>
     </div>
     <div className="w-full lg:w-[5%] h-full"></div>
     <div className="w-full lg:w-[40%] h-full bg-[url(/images/msc-cover.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-black/50 flex items-center justify-center py-12 px-4 sm:px-8 backdrop-blur">
       <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
         {latestEvent ? (
          <div className="flex flex-col gap-2">
           <img
            src={latestEvent.picture || "/msc.jpg"}
            alt="Science Fest"
            className="__topToBottom w-full rounded-lg aspect-16/9 object-cover mb-6"
           />
           <div>
            <Link to={"/activity/event/" + latestEvent.event_id}>
             <h5 className="__topToBottom mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white underline-offset-4 underline decoration-blue-500/50 decoration-2">
              {latestEvent.title || "Error occured"}
             </h5>
             <p className="__topToBottom mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm lg:text-base line-clamp-3">
              {latestEvent.description || "No description available."}
             </p>
            </Link>
            <Link
             to={
              latestEvent.direct_link ||
              latestEvent.registration_link ||
              "/activity/events"
             }
             className="__topToBottom inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             {latestEvent.direct_link ? "Details" : "Registration Link"}
            </Link>
           </div>
          </div>
         ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center py-6">
           No latest festival!
          </p>
         )}
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="_about-1 shadow-[0_0_100px_70px_rgba(173,216,230,0.1)] animate-[aboutShadow_infinite_3s]">
    <div className="w-full border border-gray-700/20 dark:border-gray-100/20 bg-primary/2 dark:bg-primary/50 backdrop-blur-xl grid xl:grid-cols-2">
     <div className="px-4 sm:px-8 py-18 xl:py-[8rem] border-b-1 xl:border-b-0 xl:border-r-1 border-gray-700/20 dark:border-gray-100/20">
      <img
       src="/images/chemistry-rftd.png"
       alt="Chemistry"
       className="__topToBottom object-cover w-[150px] mb-4 animate-[3s_var(--animate-bounce)] !opacity-70"
      />
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
      <Link to="/about-us">
       <Button className="__topToBottom flex gap-1 items-center">
        Learn More <Info size={20} />
       </Button>
      </Link>
     </div>
     <div className="px-4 sm:px-8 py-18 xl:py-[8rem] flex items-center">
      <div
       id="accordion-collapse"
       className="__topToBottom w-full"
       data-accordion="collapse"
      >
       <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-6">
        Frequently Asked Questions
       </h3>
       {accordionData.map(({ id, title, content }) => (
        <AccordionItem
         key={id}
         id={id}
         title={title}
         content={content}
         isOpen={openItem === id}
         toggleAccordion={toggleAccordion}
        />
       ))}
      </div>
     </div>
    </div>
   </div>

   <div className="_about-2 bg-primary text-white py-[5rem] border-b border-gray-100/20">
    <div className="w-full max-w-6xl mx-auto">
     <h3 className="__topToBottom text-2xl text-center md:text-3xl lg:text-4xl font-semibold mb-4">
      What Makes Us Different?
     </h3>

     <div className="__topToBottom mt-18 grid px-4 sm:px-8 lg:px-0 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {[
       [
        "Creativity & Innovation",
        "We develop critical thinking and problem-solving skills through creative and innovative projects.",
        <PencilRuler />,
       ],
       [
        "Islamic Values",
        "We adhere to Islamic values, history and moral principles, which shape us into true human beings and help foster an impactful community.",
        <Moon />,
       ],
       [
        "National Events",
        "We organize national-level events to provide opportunities for growth and collaboration.",
        <Calendar />,
       ],
       [
        "Community",
        "We create a sense of belonging and teamwork, working together to build a supportive and impactful community of Muslim scientists.",
        <Users />,
       ],
      ].map((v, i) => (
       <div
        href="#"
        className="box p-8 border rounded-lg shadow-sm bg-gray-800/50 border-gray-700 hover:bg-gray-800/25"
        key={i}
       >
        <div className="p-5 rounded-full bg-blue-100 text-primary w-fit mb-3 animate-pulse">
         {v[2]}
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-gray-900 dark:text-white">
         {v[0]}
        </h5>
        <p className="font-normal text-gray-400">{v[1]}</p>
       </div>
      ))}
     </div>
    </div>
   </div>

   <div className="_tabs z-10 py-[5rem] px-4 sm:px-8">
    <div className="w-full max-w-6xl mx-auto">
     <h3 className="__topToBottom text-2xl text-center md:text-3xl lg:text-4xl font-semibold mb-4">
      Our Achievements
     </h3>

     <div className="__topToBottom mt-16">
      <div className="w-full max-w-3xl mx-auto border rounded-lg shadow-sm bg-gray-200/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 grid grid-cols-2">
       {[
        ["Founded", "2016"],
        ["National Fest", "2"],
        ["Intra Competitions", "10+"],
        ["Workshops", "30+"],
       ].map((v, i) => (
        <div
         className="__topToBottom box px-4 py-8 sm:px-8 sm:py-12 text-center hover:bg-gray-700/5 dark:hover:bg-gray-700/30 border border-transparent hover:border-gray-500 dark:hover:border-gray-700"
         key={i}
        >
         <h3 className="font-semibold lg:text-5xl text-3xl text-gray-900 dark:text-white mb-2">
          {v[1]}
         </h3>
         <p className="text-xl mt-3 animate-pulse">{v[0]}</p>
        </div>
       ))}
      </div>
     </div>
     <div className="__topToBottom mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {Array.isArray(achievements) &&
       achievements.slice(0, 3).map((achievement, index) => (
        <div key={index}>
         <img
          className="rounded-lg aspect-[16/9] h-48 w-full object-cover border-2 border-blue-500/50 dark:border-blue-400/50 p-2 hover:scale-105 transition-transform duration-300"
          src={achievement.image}
          alt={achievement.title}
         />
         <div className="pt-3">
          <h5 className="mb-2 text-center text-xl font-medium tracking-tight text-blue-900 dark:text-blue-400">
           {achievement.title}
          </h5>
         </div>
        </div>
       ))}
     </div>
     <div className="__topToBottom mt-8 text-center">
      <Link to="/achievements">
       <Button className="py-3 px-7 text-lg">View All</Button>
      </Link>
     </div>
    </div>
   </div>

   <Contact />
  </>
 );
}

export default Home;
