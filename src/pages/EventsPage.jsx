"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react"

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const upcomingEvents = [
    {
      id: 1,
      title: "Astronomy Night",
      date: "June 15, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "Observatory Hill",
      category: "astronomy",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Join us for a night of stargazing and learn about constellations, planets, and deep space objects. We'll have telescopes set up and astronomy experts to guide you through the night sky.",
      capacity: "30 participants",
    },
    {
      id: 2,
      title: "Chemistry Workshop",
      date: "June 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Science Lab 101",
      category: "chemistry",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Explore fascinating chemical reactions and experiments in our hands-on workshop. Learn about molecular structures and the principles of chemical bonding.",
      capacity: "20 participants",
    },
    {
      id: 3,
      title: "Science Fair Preparation",
      date: "July 5, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      category: "general",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Get tips and guidance on how to create an impressive science fair project. Our mentors will help you brainstorm ideas, design experiments, and present your findings effectively.",
      capacity: "25 participants",
    },
    {
      id: 4,
      title: "Robotics Workshop",
      date: "July 12, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Tech Lab",
      category: "technology",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Learn the basics of robotics and programming. Build and program a simple robot to complete specific tasks. No prior experience required!",
      capacity: "15 participants",
    },
    {
      id: 5,
      title: "Environmental Science Field Trip",
      date: "July 19, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Green Valley Nature Reserve",
      category: "biology",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Explore local ecosystems and learn about environmental conservation. Collect water and soil samples for analysis and observe local wildlife in their natural habitat.",
      capacity: "20 participants",
    },
    {
      id: 6,
      title: "Physics of Motion Workshop",
      date: "July 26, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Physics Lab",
      category: "physics",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Explore the principles of motion, force, and energy through hands-on experiments. Design and build simple machines to demonstrate these concepts.",
      capacity: "20 participants",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "DNA Extraction Lab",
      date: "May 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Biology Lab",
      category: "biology",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Participants extracted DNA from strawberries and learned about genetic structures and the principles of molecular biology.",
      capacity: "20 participants",
    },
    {
      id: 8,
      title: "Science Trivia Night",
      date: "May 8, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Community Center",
      category: "general",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "A fun-filled evening of science trivia covering various disciplines. Teams competed for prizes while testing their scientific knowledge.",
      capacity: "40 participants",
    },
    {
      id: 9,
      title: "Renewable Energy Workshop",
      date: "April 24, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Engineering Lab",
      category: "technology",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Participants built small solar-powered devices and learned about various renewable energy technologies and their environmental impact.",
      capacity: "25 participants",
    },
  ]

  const filteredUpcomingEvents = upcomingEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredPastEvents = pastEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Events & Activities</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our upcoming and past events. Join us for workshops, field trips, competitions, and more!
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming">
            {filteredUpcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                        {event.category}
                      </div>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.capacity}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{event.description}</p>
                      <Button className="w-full">Register Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No upcoming events match your search criteria.</p>
              </div>
            )}
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past">
            {filteredPastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-3 right-3 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                        {event.category}
                      </div>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Past Event</span>
                      </div>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{event.description}</p>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No past events match your search criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Event Proposal CTA */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have an idea for a science event?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We welcome suggestions from our members! If you have an idea for a workshop, field trip, or any other
            science-related activity, let us know.
          </p>
          <Button size="lg">Propose an Event</Button>
        </div>
      </div>
    </div>
  )
}

export default EventsPage

