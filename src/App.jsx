import React from "react"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"


export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <div>
        <LandingPage/>
      </div>
    </div>
  )
}