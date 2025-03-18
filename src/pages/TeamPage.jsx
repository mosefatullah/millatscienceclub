import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Twitter, Linkedin, Mail } from "lucide-react"

const TeamPage = () => {
  const executiveTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "President",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Johnson is a professor of Physics with over 15 years of experience in scientific research and education. She founded the Millat Science Club to inspire the next generation of scientists.",
      social: {
        email: "sarah.johnson@example.com",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Prof. Michael Chen",
      role: "Vice President",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Professor Chen specializes in Chemistry and has been instrumental in developing the club's experimental workshops and laboratory activities.",
      social: {
        email: "michael.chen@example.com",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Dr. Aisha Patel",
      role: "Secretary",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Patel is a biologist with a passion for science communication. She manages the club's administrative affairs and coordinates with external organizations.",
      social: {
        email: "aisha.patel@example.com",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Robert Williams",
      role: "Treasurer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Robert has a background in finance and a love for astronomy. He manages the club's finances and helps secure funding for our various activities.",
      social: {
        email: "robert.williams@example.com",
        linkedin: "#",
      },
    },
  ]

  const coordinators = [
    {
      name: "Emily Rodriguez",
      role: "Events Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Emily organizes and coordinates all club events, from workshops to field trips. Her attention to detail ensures that every event runs smoothly.",
      social: {
        email: "emily.rodriguez@example.com",
        twitter: "#",
      },
    },
    {
      name: "James Kim",
      role: "Outreach Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "James manages the club's community outreach programs, working with schools and community centers to promote science education.",
      social: {
        email: "james.kim@example.com",
        linkedin: "#",
      },
    },
    {
      name: "Sophia Nguyen",
      role: "Communications Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia handles the club's social media presence, newsletter, and website. She ensures that members stay informed about upcoming events and activities.",
      social: {
        email: "sophia.nguyen@example.com",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Thompson",
      role: "Technical Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David manages the technical aspects of the club's activities, from setting up laboratory equipment to maintaining our digital infrastructure.",
      social: {
        email: "david.thompson@example.com",
        linkedin: "#",
      },
    },
  ]

  const volunteers = [
    {
      name: "Lisa Martinez",
      role: "Workshop Facilitator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Lisa is a high school science teacher who volunteers her time to facilitate workshops for younger members.",
      social: {
        email: "lisa.martinez@example.com",
      },
    },
    {
      name: "Ahmed Hassan",
      role: "Mentor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ahmed is a graduate student in Environmental Science who mentors club members on research projects.",
      social: {
        email: "ahmed.hassan@example.com",
        linkedin: "#",
      },
    },
    {
      name: "Grace Wilson",
      role: "Event Volunteer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Grace is an undergraduate student who assists with event setup, registration, and other logistical tasks.",
      social: {
        email: "grace.wilson@example.com",
      },
    },
    {
      name: "Carlos Mendez",
      role: "Content Creator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Carlos creates educational content for the club's social media channels and website.",
      social: {
        email: "carlos.mendez@example.com",
        twitter: "#",
      },
    },
  ]

  const renderTeamMembers = (members) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="relative h-64 overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{member.bio}</p>
              <div className="flex space-x-3">
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    aria-label={`Email ${member.name}`}
                    className="text-gray-500 hover:text-primary"
                  >
                    <Mail size={18} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="text-gray-500 hover:text-primary"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Twitter`}
                    className="text-gray-500 hover:text-primary"
                  >
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated individuals who make the Millat Science Club possible. Our team is committed to promoting
            scientific education and fostering a community of curious minds.
          </p>
        </div>

        {/* Team Tabs */}
        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="executive">Executive Team</TabsTrigger>
            <TabsTrigger value="coordinators">Coordinators</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
          </TabsList>

          <TabsContent value="executive">{renderTeamMembers(executiveTeam)}</TabsContent>

          <TabsContent value="coordinators">{renderTeamMembers(coordinators)}</TabsContent>

          <TabsContent value="volunteers">{renderTeamMembers(volunteers)}</TabsContent>
        </Tabs>

        {/* Join the Team CTA */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Joining Our Team?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team of volunteers. Whether you're a scientist,
            educator, student, or simply someone who loves science, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Volunteer Opportunities
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage

