import React from 'react'
import ProductCard from '../components/ProductCard'
import FeatureCard from '../FeatureCard'
import Email from '../components/Email'
import PageHeader from '../components/PageHeader'
import AboutFeature from '../components/AboutFeature'

const page = () => {
  return (
    <div>
<PageHeader />
<ProductCard />
<AboutFeature />
<FeatureCard />
<Email />
    </div>
   

  )
}

export default page