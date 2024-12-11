import React from "react"
import Navbar from "./components/Navbar"
//import NavbarB from "./components/NavbarB"
import LandingPage from "./pages/LandingPage"
//import ProfilePage from "./pages/ProfilePage"


export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <div className=" bg-black pt-16">
        <LandingPage/>
      </div>
    </div>
  )
}