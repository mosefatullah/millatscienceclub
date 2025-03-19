import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Info, Moon, PencilRuler, Users } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router";
import { topToBottom } from "../utils/anims";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    topToBottom();
  }, []);

  return (
    <>
      <div className="_hero w-full min-h-[90vh]">
        <div className="lg:flex relative lg:h-[90vh]">
          <div className="w-full lg:w-[60%] h-full px-8 py-12 flex flex-col justify-center">
            <h1 className="__topToBottom text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover the Wonder of Science
            </h1>
            <p className="__topToBottom text-lg mb-8 text-blue-100">
              Join Millat Science Club to explore, experiment, and expand your
              scientific knowledge through hands-on activities and engaging
              events.
            </p>
            <div className="__topToBottom flex flex-col sm:flex-row gap-4">
              <Button dark className="px-7 py-3 text-[1.1rem]">
                Join Our Club
              </Button>
              <Button className="px-7 py-3 text-[1.1rem]">
                Explore Events
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-[40%] h-full">
            <img
              src="/images/msc-cover.jpg"
              alt="Millat Science Club"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </div>
      <div className="_about-1 shadow-[0_0_100px_70px_rgba(173,216,230,0.1)] animate-[aboutShadow_infinite_3s]">
        <div className="w-full border border-gray-100/20 bg-primary/50 backdrop-blur-xl grid xl:grid-cols-2">
          <div className="px-8 py-18 xl:py-[10rem] border-b-1 xl:border-r-1 border-gray-100/20">
            <h3 className="__topToBottom text-3xl font-bold mb-6">
              About Millat Science Club
            </h3>
            <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2010, Millat Science Club is dedicated to fostering
              scientific curiosity and innovation among students and science
              enthusiasts.
            </p>
            <p className="__topToBottom text-gray-600 dark:text-gray-400 mb-6">
              We believe that science education should be accessible, engaging,
              and fun. Our diverse community includes students, educators,
              researchers, and science enthusiasts who come together to share
              knowledge, collaborate on projects, and inspire the next
              generation of scientists.
            </p>
            <Link to="/about-us">
              <Button className="__topToBottom flex gap-1 items-center">
                Learn More <Info size={20} />
              </Button>
            </Link>
          </div>
          <div className="__topToBottom px-8 py-18 xl:py-[10rem]">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="_about-2 bg-primary py-[5rem]">
        <div className="w-full max-w-6xl mx-auto">
          <h3 className="__topToBottom text-2xl text-center md:text-3xl lg:text-4xl font-semibold mb-4">
            What Makes Us Different?
          </h3>

          <div className="__topToBottom mt-18 grid px-8 lg:px-0 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
