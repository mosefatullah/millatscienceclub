import { Info } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router";
import { useEffect } from "react";
import { topToBottom } from "../utils/anims";

function About() {
  useEffect(() => {
    topToBottom();
  }, []);
  return (
    <>
      <div className="_about-1">
        <div className="w-full border border-gray-700/20 dark:border-gray-100/20 bg-primary/5 dark:bg-primary/50 backdrop-blur-xl grid xl:grid-cols-2">
          <div className="px-4 sm:px-8 py-18 xl:py-[10rem] border-b-1 xl:border-b-0 xl:border-r-1 border-gray-700/20 dark:border-gray-100/20">
            <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              About Millat Science Club
            </h3>
            <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2024, Millat Science Club, based at Ta'mirul Millat
              kamil Madrasah in Bangladesh, is dedicated to fostering scientific
              curiosity and innovation among students and science enthusiasts.
            </p>
            <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
              We believe that science education should be accessible, engaging,
              and fun. Our diverse community includes students, educators,
              researchers, and science enthusiasts who come together to share
              knowledge, collaborate on projects, and inspire the next
              generation of scientists.
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

      <div id="team" className="_team shadow-[0_0_100px_70px_rgba(173,216,230,0.1)] animate-[aboutShadow_infinite_3s] border border-gray-700/20 dark:border-gray-100/20">
        <div className="w-full max-w-7xl mx-auto dark:bg-primary/50 backdrop-blur-xl px-8 py-18 xl:py-[5rem]">
          <h3 className="__topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
            Advisor Panel
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
            {[
              {
                name: "Abdur Rahman",
                inst: "Vice President of Millat Students' Union",
                pic: "w3T1Z7H7.jpg",
              },
              {
                name: "Saad Al Amin",
                inst: "Knox College, USA",
                pic: "6772925612301.jpg",
              },
              {
                name: "Shaifullah Maruf",
                inst: "Dhaka City College",
                pic: "shaiu877.jpg",
              },
              {
                name: "Md Hasan Sarder",
                inst: "Former President. HSC'23",
                pic: "159558794212054.jpg",
              },
              {
                name: "Md Irfan Hasan Fahim",
                inst: "HSC'23",
                pic: "FiC2dkCZ.jpg",
              },
              {
                name: "Kazi Shoaib Hasan",
                inst: "Jahangirnagar University",
                pic: "BpaTCYjt.jpg",
              },
            ].map((v, i) => (
              <div
                className="__topToBottom border border-gray-400/50 dark:border-gray-700/30 bg-gray-500/10 dark:bg-gray-700/20"
                key={i}
              >
                <img
                  src={"/images/person/" + v.pic}
                  alt={v.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 lg:p-6">
                  <h3 className="font-bold text-2xl mb-2">{v.name}</h3>
                  <p>{v.inst}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-18 __topToBottom text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
            Executive Team
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
                className="__topToBottom border border-gray-400/50 dark:border-gray-700/30 bg-gray-500/10 dark:bg-gray-700/20"
                key={i}
              >
                <img
                  src={"/images/person/" + v.pic}
                  alt={v.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 lg:p-6">
                  <h3 className="font-bold text-2xl mb-2">{v.name}</h3>
                  <p>{v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
