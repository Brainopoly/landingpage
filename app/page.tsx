import Image from "next/image"
import Link from "next/link"
import { Brain, ChevronRight, Globe, Layers, LineChart, MessageSquareText, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-coral-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-mint-600">Brainopoly</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-700 hover:text-mint-600 font-medium">
                Home
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-mint-600 font-medium">
                Features
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-mint-600 font-medium">
                About Us
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-mint-600 font-medium">
                Contact
              </Link>
              <Button className="bg-coral-500 hover:bg-coral-600 text-white border-none">Get Started</Button>
            </nav>

            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        {/* Geometric Shapes - removed pink circle and green circles */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-sky-300 rounded-full opacity-80"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-yellow-400 rotate-45"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 pt-16">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-mint-600">BRAINOPOLY</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
                Gamify Assessment.
                <br />
                Maximize Learning.
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Brainopoly transforms student learning with AI-powered, personalized, gamified assessments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white border-none">
                  Try for Free
                </Button>
                <Button size="lg" variant="outline" className="border-mint-500 text-mint-600 hover:bg-mint-50">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 border-4 border-black rounded-[40px] overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  width={300}
                  height={600}
                  alt="Student using Brainopoly app on mobile"
                  className="w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-lg rotate-12 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-coral-500 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        {/* Geometric Shapes - removed green circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-sky-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-coral-500 rounded-full opacity-80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-coral-500 text-center mb-16">Gamification Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard percentage="88%" text="improved memory" color="sky" />
            <StatCard percentage="68%" text="higher motivation" color="sky" />
            <StatCard percentage="40%" text="more engagement" color="sky" />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Geometric Shapes - removed green circles */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-coral-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-300 rounded-full opacity-80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-mint-600 text-center mb-16">Key Benefits</h2>

          <div className="relative">
            {/* Yellow blob connector with improved contrast */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] z-0 opacity-40">
              <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,100 Q125,50 250,100 Q375,150 450,100" stroke="none" fill="#FCD34D" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Personalised Assessment</h3>
                <p className="text-gray-700">
                  Testing the student based on how they respond, going from easy to medium to difficult for each topic
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-coral-100 rounded-full flex items-center justify-center">
                  <MessageSquareText className="w-8 h-8 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI-Based Feedback</h3>
                <p className="text-gray-700">Detailed and instant feedback based on the student's performance</p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Higher Class Engagement</h3>
                <p className="text-gray-700">
                  Building a competitive environment to increase engagement even within the class
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Features Grid */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Geometric Shapes - removed green circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-sky-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-coral-500 rounded-full opacity-80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-mint-600 text-center mb-16">USP</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            <UspFeature title="Localized Storyline" icon={<Globe className="w-6 h-6 text-white" />} />
            <UspFeature title="Internal Leaderboard" icon={<Trophy className="w-6 h-6 text-white" />} />
            <UspFeature title="Faculty Dashboard" icon={<LineChart className="w-6 h-6 text-white" />} />
            <UspFeature title="Personalized Questions" icon={<MessageSquareText className="w-6 h-6 text-white" />} />
            <UspFeature title="Answer Explanation" icon={<Layers className="w-6 h-6 text-white" />} />
            <UspFeature title="AI Performance Report" icon={<Brain className="w-6 h-6 text-white" />} />
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Geometric Shapes - removed green circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-300 rounded-full opacity-80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 md:order-2">
              <h2 className="text-5xl font-bold text-coral-500 mb-8">AI Feedback</h2>
              <p className="text-xl text-gray-700 mb-8">
                A detailed report for the student that identifies the strength and weakness and gives recommendation of
                how to improve the concepts.
              </p>
            </div>
            <div className="flex-1 md:order-1">
              <div className="relative">
                <div className="border-4 border-black rounded-[40px] overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    width={300}
                    height={600}
                    alt="AI Feedback Screen showing student performance analysis"
                    className="w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-400 rounded-lg rotate-12"></div>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl font-bold text-mint-600 mb-16">App Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PhoneFeature title="Explanation" imageSrc="/placeholder.svg?height=600&width=300" />
              <PhoneFeature title="Leaderboard" imageSrc="/placeholder.svg?height=600&width=300" />
              <PhoneFeature title="Levels" imageSrc="/placeholder.svg?height=600&width=300" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Geometric Shapes - removed green circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-coral-500 rounded-full opacity-80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-mint-200 p-12">
            <h2 className="text-4xl font-bold text-mint-600 mb-8 text-center">Get in Touch</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Aman Loharuka</h3>
                <p className="text-gray-700">Co-founder</p>
                <p className="text-gray-700">contact@brainopoly.com</p>
                <p className="text-gray-700">+91 8758076106</p>
              </div>

              <div>
                <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white border-none">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-mint-600">Brainopoly</h3>
              <p className="text-gray-600">Gamify Assessment. Maximize Learning.</p>
            </div>

            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-mint-600">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-mint-600">
                Features
              </Link>
              <Link href="#" className="text-gray-600 hover:text-mint-600">
                Pricing
              </Link>
              <Link href="#" className="text-gray-600 hover:text-mint-600">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Brainopoly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for statistics cards
function StatCard({ percentage, text, color }) {
  const bgColor = {
    sky: "bg-sky-200",
    mint: "bg-mint-200",
    coral: "bg-coral-200",
    yellow: "bg-yellow-200",
  }

  return (
    <div className={`rounded-xl p-8 ${bgColor[color]} relative overflow-hidden group shadow-md`}>
      <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-400 rounded-bl-full"></div>
      <div className="absolute top-0 left-0 w-8 h-8 border-2 border-coral-500 rounded-bl-full"></div>

      <div className="relative z-10">
        <h3 className="text-5xl font-bold mb-4">{percentage}</h3>
        <p className="text-gray-700 text-lg">{text}</p>
      </div>
    </div>
  )
}

// Component for USP features
function UspFeature({ title, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-coral-500 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-center">{title}</h3>

      {/* Connector arrow - only visible on desktop */}
      <div className="hidden md:block mt-4">
        <ChevronRight className="w-6 h-6 text-yellow-500" />
      </div>
    </div>
  )
}

// Component for phone feature
function PhoneFeature({ title, imageSrc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="border-4 border-black rounded-[40px] overflow-hidden shadow-xl">
          <Image src={imageSrc || "/placeholder.svg"} width={300} height={600} alt={title} className="w-full" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
  )
}
