import React from 'react'
import AllProducts from '../components/AllProducts'
import TableBackground from '../components/TableBackground'
import ProdutNabar from '../components/ProdutNabar'

const page = () => {
  return (
    <div>
        <TableBackground />
        <ProdutNabar />
        <AllProducts />
    </div>
  )
}

export default page