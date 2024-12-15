import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../FeatureCard'
import ListingCard from '../ListingCard'
import ProductCard from '../components/ProductCard'
import Email from '../components/Email'

const page = () => {
  return (
    <div>
         <HeroSection />
            <FeatureCard />
            <ListingCard />
            <ProductCard />
            <Email />
    </div>
  )
}

export default page