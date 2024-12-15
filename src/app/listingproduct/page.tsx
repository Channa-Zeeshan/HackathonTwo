import React from 'react'
import Email from '../components/Email'
import FeatureCard from '../FeatureCard'
import ListingCard from '../ListingCard'
import ProductDetail from '../components/ProductDetail'

const ListingProduct = () => {
  return (
    <div> 
        <ProductDetail />
        <ListingCard />
        <FeatureCard />
       <Email />

    </div>
  )
}

export default ListingProduct