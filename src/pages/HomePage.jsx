import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Beaker,
  Rocket,
  Users,
  Calendar,
  ChevronRight,
  ArrowRight,
  FlaskRoundIcon as Flask,
  Microscope,
  Atom,
} from "lucide-react"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Discover the Wonder of Science</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join Millat Science Club to explore, experiment, and expand your scientific knowledge through hands-on
              activities and engaging events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Join Our Club
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Our Science Club?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the benefits of being part of our vibrant scientific community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Beaker className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Hands-on Experiments</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Participate in exciting experiments that bring scientific concepts to life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with like-minded individuals who share your passion for science.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Rocket className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop critical thinking and problem-solving skills through creative projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Regular Events</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Attend workshops, field trips, competitions, and guest lectures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Students engaged in a science experiment"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Millat Science Club</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2010, Millat Science Club is dedicated to fostering scientific curiosity and innovation among
                students and science enthusiasts. Our club provides a platform for members to explore various scientific
                disciplines through hands-on activities, collaborative projects, and educational events.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We believe that science education should be accessible, engaging, and fun. Our diverse community
                includes students, educators, researchers, and science enthusiasts who come together to share knowledge,
                collaborate on projects, and inspire the next generation of scientists.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Promoting scientific literacy and critical thinking
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating opportunities for hands-on learning experiences
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Building a supportive community of science enthusiasts
                  </p>
                </div>
              </div>
              <Button className="mt-6">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-gray-600 dark:text-gray-400">Join us for these exciting scientific activities</p>
            </div>
            <Link to="/events" className="flex items-center text-primary hover:text-primary/80 mt-4 md:mt-0">
              <span className="mr-2">View All Events</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Astronomy Night",
                date: "June 15, 2025",
                image: "/placeholder.svg?height=300&width=500",
                description:
                  "Join us for a night of stargazing and learn about constellations, planets, and deep space objects.",
                icon: <Atom />,
              },
              {
                title: "Chemistry Workshop",
                date: "June 22, 2025",
                image: "/placeholder.svg?height=300&width=500",
                description: "Explore fascinating chemical reactions and experiments in our hands-on workshop.",
                icon: <Flask />,
              },
              {
                title: "Science Fair Preparation",
                date: "July 5, 2025",
                image: "/placeholder.svg?height=300&width=500",
                description: "Get tips and guidance on how to create an impressive science fair project.",
                icon: <Microscope />,
              },
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-primary">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="text-primary">{event.icon}</div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from students and science enthusiasts who have been part of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "High School Student",
                quote:
                  "Being part of the Millat Science Club has ignited my passion for physics. The hands-on experiments and supportive community have helped me grow both academically and personally.",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "David Chen",
                role: "College Student",
                quote:
                  "I've been a member for three years, and it's been an incredible journey. The club has provided me with opportunities to collaborate on research projects and connect with mentors in my field.",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Priya Patel",
                role: "Science Teacher",
                quote:
                  "As an educator, I've seen firsthand how the Millat Science Club inspires students to pursue STEM careers. The club's activities complement classroom learning in a fun and engaging way.",
                avatar: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Scientific Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a member today and start your journey of scientific discovery and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

