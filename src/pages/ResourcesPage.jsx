"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Download,
  ExternalLink,
  BookOpen,
  Video,
  FileText,
  FlaskRoundIcon as Flask,
  Database,
} from "lucide-react"

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", name: "All Resources" },
    { id: "articles", name: "Articles" },
    { id: "experiments", name: "Experiments" },
    { id: "videos", name: "Videos" },
    { id: "papers", name: "Research Papers" },
  ]

  const [activeCategory, setActiveCategory] = useState("all")

  const resources = [
    {
      id: 1,
      title: "Introduction to Scientific Method",
      type: "articles",
      description:
        "A comprehensive guide to understanding and applying the scientific method in research and experiments.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "DIY Chemistry Experiments for Beginners",
      type: "experiments",
      description:
        "Step-by-step instructions for 10 safe and educational chemistry experiments you can do at home with common household items.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <Flask className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "The Wonders of Astronomy",
      type: "videos",
      description: "A video series exploring the fascinating world of astronomy, from planets to distant galaxies.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Understanding DNA: The Building Blocks of Life",
      type: "articles",
      description: "An in-depth article explaining the structure and function of DNA in living organisms.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Physics Experiments with Simple Machines",
      type: "experiments",
      description: "Learn about the principles of physics by building and experimenting with simple machines.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <Flask className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "The Impact of Climate Change on Ecosystems",
      type: "papers",
      description: "A research paper examining the effects of climate change on various ecosystems around the world.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 7,
      title: "Exploring Microbiology: The World of Tiny Organisms",
      type: "videos",
      description:
        "A video series that takes you into the microscopic world of bacteria, viruses, and other microorganisms.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: 8,
      title: "Advancements in Renewable Energy Technologies",
      type: "papers",
      description:
        "A comprehensive review of recent developments in solar, wind, and other renewable energy technologies.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 9,
      title: "The Human Brain: Structure and Function",
      type: "articles",
      description: "An educational article about the anatomy and physiology of the human brain.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 10,
      title: "Biology Experiments: Exploring Plant Growth",
      type: "experiments",
      description: "A series of experiments to understand factors affecting plant growth and development.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <Flask className="h-5 w-5" />,
    },
    {
      id: 11,
      title: "The Science of Space Exploration",
      type: "videos",
      description: "A documentary series about past, present, and future space missions and discoveries.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: 12,
      title: "Quantum Computing: Principles and Applications",
      type: "papers",
      description:
        "A research paper discussing the fundamentals of quantum computing and its potential impact on various fields.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      icon: <FileText className="h-5 w-5" />,
    },
  ]

  const filteredResources = resources.filter(
    (resource) =>
      (activeCategory === "all" || resource.type === activeCategory) &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const getIconForResourceType = (type) => {
    switch (type) {
      case "articles":
        return <BookOpen className="h-5 w-5 text-blue-500" />
      case "experiments":
        return <Flask className="h-5 w-5 text-green-500" />
      case "videos":
        return <Video className="h-5 w-5 text-red-500" />
      case "papers":
        return <FileText className="h-5 w-5 text-purple-500" />
      default:
        return <Database className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Science Resources</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of educational resources, including articles, experiment guides, videos, and research
            papers to enhance your scientific knowledge.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-xs font-bold px-2 py-1 rounded-full uppercase flex items-center space-x-1">
                    {getIconForResourceType(resource.type)}
                    <span className="capitalize">{resource.type}</span>
                  </div>
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-3">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1 flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button className="flex-1 flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No resources match your search criteria.</p>
          </div>
        )}

        {/* Resource Request CTA */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            If you need specific scientific resources or have suggestions for new content, let us know. We're constantly
            expanding our collection to better serve our community.
          </p>
          <Button size="lg">Request a Resource</Button>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage

