import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Info, Moon, PencilRuler, Users } from "lucide-react";
import Button from "../components/Button";
import { Link, NavLink } from "react-router";
import { topToBottom } from "../utils/anims";
import Typewriter from "typewriter-effect/dist/core";
import AccordionItem from "../components/Accordion";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

function Home() {
 const typewriterRef = useRef(null);
 const typeFade = useRef(null);
 useEffect(() => {
  topToBottom();
  if (window.innerWidth > 640 && typewriterRef.current) {
   const typewriter = new Typewriter(typewriterRef.current, {
    strings: ["Science!", "Muslim Scientists!", "Madrasah Students!"],
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
     typeFade.current.classList.add("opacity-0");
     setTimeout(() => {
      if (typeFade.current) {
       typeFade.current.classList.remove("opacity-0");
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
   title: "What is Tamirul Millat Kamil Madrasah?",
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
   title: "What is the Millat Science Club?",
   content: (
    <>
     The Millat Science Club is a student-run organization at Tamirul Millat
     Kamil Madrasah that aims to foster a love for science and technology among
     students. Through various activities, workshops, and events, we encourage
     scientific curiosity and provide hands-on learning experiences. Our goal is
     to develop critical thinking skills, enhance creativity, and inspire the
     next generation of scientists and innovators.
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
     science and want to participate in our various activities. You can also register online through our
     official website at <Link to="/register" className="text-blue-600 dark:text-blue-400">mscbd.org/register</Link> for a more convenient signup
     process.
    </>
   ),
  },
 ];

 const [activeTab, setActiveTab] = useState(1);

 const handleTabClick = (tabId) => {
  setActiveTab(tabId);
 };

 const tabs = [
  {
   id: 1,
   title: "At a Glance",
   content: (
    <>
     <div className="w-full max-w-3xl mx-auto border rounded-lg shadow-sm bg-gray-200/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 grid grid-cols-2">
      {[
       ["Founded", "2016"],
       ["Projects", "2+"],
       ["National Fest", "1"],
       ["Workshops", "1"],
      ].map((v, i) => (
       <div
        className="__topToBottom box px-4 py-8 sm:px-8 sm:py-12 text-center hover:bg-gray-700/5 dark:hover:bg-gray-700/30 border border-transparent hover:border-gray-500 dark:hover:border-gray-700"
        key={i}
       >
        <h3 className="font-semibold text-5xl">{v[1]}</h3>
        <p className="text-xl mt-3 animate-pulse">{v[0]}</p>
       </div>
      ))}
     </div>
    </>
   ),
  },
  {
   id: 2,
   title: "Achievements",
   content: (
    <>
     <div className="w-full min-h-[200px] max-w-3xl mx-auto border rounded-lg shadow-sm bg-gray-200/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 grid grid-cols-2"></div>
    </>
   ),
  },
 ];

 return (
  <>
   <Helmet>
    <title>Millat Science Club | মিল্লাত সাইন্স ক্লাব</title>
   </Helmet>
   <div className="_hero w-full min-h-[90vh]">
    <div className="lg:flex relative lg:h-[90vh]">
     <div className="w-full lg:w-[60%] h-full px-4 sm:px-8 py-12 flex flex-col justify-center">
      <h1 className="__topToBottom text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
       Discover the{" "}
       <span className="fade-text dark:text-gray-400" ref={typeFade}>
        {texts[currentIndex]}
       </span>{" "}
       of{" "}
       <span ref={typewriterRef} className="inline dark:text-gray-400">
        Science!
       </span>
      </h1>
      <p className="__topToBottom xl:text-lg mb-8 text-blue-950 dark:text-blue-100">
       Join Millat Science Club to explore, experiment, and expand your
       scientific knowledge through hands-on activities and engaging events.
      </p>
      <div className="__topToBottom">
       <Link to="/events">
        <Button dark className="py-3 sm:px-7 sm:text-[1.1rem]">
         Explore Events
        </Button>
       </Link>
      </div>
     </div>
     <div className="w-full lg:w-[40%] h-full">
      <img
       src="/images/msc-cover.jpg"
       alt="Millat Science Club"
       className="w-full h-full object-cover dark:opacity-50"
      />
     </div>
    </div>
   </div>
   <div className="_about-1 shadow-[0_0_100px_70px_rgba(173,216,230,0.1)] animate-[aboutShadow_infinite_3s]">
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
      <Link to="/about-us">
       <Button className="__topToBottom flex gap-1 items-center">
        Learn More <Info size={20} />
       </Button>
      </Link>
     </div>
     <div className="px-4 sm:px-8 py-18 xl:py-[10rem] flex items-center">
      <div
       id="accordion-collapse"
       className="__topToBottom w-full"
       data-accordion="collapse"
      >
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

   <div className="_tabs py-[5rem] px-4 sm:px-8">
    <div className="w-full max-w-6xl mx-auto">
     <ul className="__topToBottom flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      {tabs.map(({ id, title }) => (
       <li key={id} className="me-2">
        <a
         href="#"
         className={`inline-block px-4 py-3 rounded-lg ${
          activeTab === id
           ? "text-white bg-blue-600"
           : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
         }`}
         onClick={(e) => {
          e.preventDefault();
          handleTabClick(id);
         }}
        >
         {title}
        </a>
       </li>
      ))}
     </ul>

     <div className="__topToBottom mt-16">
      {tabs.map(
       ({ id, content }) => activeTab === id && <div key={id}>{content}</div>
      )}
     </div>
    </div>
   </div>
  </>
 );
}

export default Home;
