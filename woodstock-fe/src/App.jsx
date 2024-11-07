import React from "react"
import Navbar from "./components/Navbar"
import RegisterForm from "./pages/RegistrationForm"


export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <div>
        <RegisterForm/>
      </div>
    </div>
  )
}