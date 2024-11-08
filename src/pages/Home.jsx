import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <main className="h-screen w-full p-2">
      <HeroSection />
      <Footer/>
    </main>
  );
};

export default Home;
