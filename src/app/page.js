"use client";


import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HowWeWork from "./Components/HowWeWork";   
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen">
      <Header />
      <Hero />
      <HowWeWork/>
      <Services />
      <About />
      <Contact />
      <Footer/>
    
    </main>
    
  );
}