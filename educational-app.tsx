"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Home, Trophy, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EducationalApp() {
  return (
    <div className="bg-gray-900 min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 md:right-1/3">
          <div className="relative">
            <div className="w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="w-24 h-3 bg-green-400 rotate-12 absolute -bottom-1 -right-16"></div>
            <div className="w-10 h-10 bg-yellow-300 rotate-45 absolute top-8 right-0"></div>
          </div>
        </div>

        {/* Left Phone - Science Quiz */}
        <PhoneFrame>
          <ScienceQuizScreen />
        </PhoneFrame>

        {/* Middle Branding */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="text-red-400 font-cursive">UI/UX</span>
            <br />
            <span className="text-green-400 uppercase tracking-wide">PRODUCT</span>
          </h1>

          <div className="mt-8 relative">
            <div className="w-12 h-12 bg-red-400 rounded-full"></div>
            <div className="w-24 h-3 bg-green-400 absolute top-12 left-0"></div>
            <div className="w-12 h-12 bg-yellow-300 absolute top-16 left-0"></div>
            <div className="w-12 h-12 bg-sky-300 absolute top-16 left-16"></div>
          </div>
        </div>

        {/* Right Phone - Home Screen */}
        <PhoneFrame>
          <HomeScreen />
        </PhoneFrame>
      </div>
    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-8 border-black rounded-[40px] overflow-hidden relative w-[280px] h-[560px] bg-white">
      <div className="absolute top-0 left-0 right-0 h-6 bg-black flex justify-center items-center">
        <div className="w-20 h-4 bg-black rounded-b-xl"></div>
      </div>
      <div className="pt-6 h-full">{children}</div>
    </div>
  )
}

function ScienceQuizScreen() {
  return (
    <div className="bg-sky-50 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center">
        <button className="rounded-full w-8 h-8 flex items-center justify-center">
          <ArrowLeft size={20} className="text-gray-500" />
        </button>
        <div className="flex-1 flex justify-center">
          <div className="text-center">
            <h2 className="text-sky-600 font-bold text-lg">SCIENCE</h2>
            <p className="text-xs text-gray-500">LEVEL 1: Matter in Our Surroundings</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">20</div>
      </div>

      {/* Avatar and Question */}
      <div className="px-4 flex items-center gap-2 mt-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="text-xs text-gray-600">Question 2 of 20</div>
      </div>

      {/* Question */}
      <div className="px-4 mt-4">
        <h3 className="font-medium text-sm">Match the following</h3>
      </div>

      {/* Matching options */}
      <div className="px-4 mt-4 flex-1">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-md p-3 text-sm">Solid</div>
          <div className="bg-white rounded-md p-3 text-sm">High compressibility</div>

          <div className="bg-white rounded-md p-3 text-sm">Liquid</div>
          <div className="bg-white rounded-md p-3 text-sm">Definite shape</div>

          <div className="bg-white rounded-md p-3 text-sm">Gas</div>
          <div className="bg-white rounded-md p-3 text-sm">Fixed volume</div>
        </div>
      </div>

      {/* Submit button */}
      <div className="p-4">
        <button className="w-full bg-blue-400 text-white py-3 rounded-md font-medium">SUBMIT</button>
      </div>
    </div>
  )
}

function HomeScreen() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="bg-sky-50 h-full flex flex-col">
      {/* Header */}
      <div className="p-4">
        <h2 className="text-sm text-gray-500">Hello, Rahul!</h2>
        <h1 className="text-lg font-medium text-gray-700 mt-1">What would you like to learn today?</h1>
      </div>

      {/* Quiz options */}
      <div className="px-4 mt-2 flex gap-4">
        <div className="flex-1 bg-white rounded-lg p-3 flex flex-col items-center">
          <div className="w-16 h-16 mb-2">
            <img
              src="/placeholder.svg?height=64&width=64"
              alt="Science Quiz"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm font-medium">Science Quiz</p>
          <p className="text-xs text-gray-400">Chemistry</p>
          <div className="w-full mt-2">
            <div className="h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 w-3/4 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg p-3 flex flex-col items-center">
          <div className="w-16 h-16 mb-2">
            <img src="/placeholder.svg?height=64&width=64" alt="Math Quiz" className="w-full h-full object-contain" />
          </div>
          <p className="text-sm font-medium">Math Quiz</p>
          <p className="text-xs text-gray-400">Algebra</p>
          <div className="w-full mt-2">
            <div className="h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 w-1/4 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Unfinished Games */}
      <div className="px-4 mt-6">
        <h3 className="font-medium text-gray-700">Unfinished Games</h3>

        <div className="mt-4 space-y-3">
          {/* Mathematics */}
          <div className="bg-white rounded-lg p-3 flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-purple-400"></div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">Mathematics (Level - 1)</p>
              <p className="text-xs text-gray-400">8 modules to cover</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">
              81%
            </div>
          </div>

          {/* Science */}
          <div className="bg-white rounded-lg p-3 flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-orange-400"></div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">Science (Level - 2)</p>
              <p className="text-xs text-gray-400">12 modules to cover</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-medium text-orange-600">
              65%
            </div>
          </div>

          {/* Computer */}
          <div className="bg-white rounded-lg p-3 flex items-center">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-pink-400"></div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">Computer (Level - 1)</p>
              <p className="text-xs text-gray-400">5 modules to cover</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-medium text-pink-600">
              40%
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto border-t border-gray-200">
        <div className="flex justify-around py-3">
          <button
            className={cn("flex flex-col items-center", activeTab === "home" ? "text-blue-500" : "text-gray-400")}
            onClick={() => setActiveTab("home")}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>

          <button
            className={cn(
              "flex flex-col items-center",
              activeTab === "leaderboard" ? "text-blue-500" : "text-gray-400",
            )}
            onClick={() => setActiveTab("leaderboard")}
          >
            <Trophy size={20} />
            <span className="text-xs mt-1">Leaderboard</span>
          </button>

          <button
            className={cn("flex flex-col items-center", activeTab === "profile" ? "text-blue-500" : "text-gray-400")}
            onClick={() => setActiveTab("profile")}
          >
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}
