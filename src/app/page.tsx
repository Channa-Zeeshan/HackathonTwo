
import Buttons from "./components/Buttons";
import { HeartPulse } from 'lucide-react';
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Listings from "./components/Listings";
import ProductCard from "./components/ProductCard";
import Email from "./components/Email";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
   <Navbar/>
   <HeroSection />
   <Features />
   <Listings />
   <ProductCard />
   <Email />
   <Footer />
   </div>
   
  );
}
