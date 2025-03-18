import { Calendar, Moon, PencilRuler, Users } from "lucide-react";
import Button from "../components/Button";

function Home() {
  return (
    <>
      <div className="_hero w-full max-w-6xl mx-auto min-h-[70vh] grid grid-cols-2 items-center pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover the Wonder of Science
          </h1>
          <p className="text-lg mb-8 text-blue-100">
            Join Millat Science Club to explore, experiment, and expand your
            scientific knowledge through hands-on activities and engaging
            events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button dark className="px-7 py-3 text-[1.1rem]">
              Join Our Club
            </Button>
            <Button className="px-7 py-3 text-[1.1rem]">Explore Events</Button>
          </div>
        </div>
        <div>
          <img
            src="/images/telescope.png"
            alt=""
            className="ms-auto filter invert saturate-0 opacity-20 animate-pulse"
          />
        </div>
      </div>
      <div className="_about-1 bg-gray-950 py-18">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2">
          <div></div>
          <div>
            <h3 className="text-3xl font-bold mb-6">
              About Millat Science Club
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2010, Millat Science Club is dedicated to fostering
              scientific curiosity and innovation among students and science
              enthusiasts. Our club provides a platform for members to explore
              various scientific disciplines through hands-on activities,
              collaborative projects, and educational events.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We believe that science education should be accessible, engaging,
              and fun. Our diverse community includes students, educators,
              researchers, and science enthusiasts who come together to share
              knowledge, collaborate on projects, and inspire the next
              generation of scientists.
            </p>
          </div>
        </div>
      </div>
      <div className="_about-2 bg-primary py-18">
        <div className="w-full max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            What Makes Us Different?
          </h3>

          <hr className="border-gray-900" />

          <div className="mt-8 grid grid-cols-3 gap-8">
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
                className="p-8 border rounded-lg shadow-sm bg-gray-800/50 border-gray-700 hover:bg-gray-800/30"
              >
                <div className="p-5 rounded-full bg-blue-100 text-primary w-fit mb-3">
                  {v[2]}
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {v[0]}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {v[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
