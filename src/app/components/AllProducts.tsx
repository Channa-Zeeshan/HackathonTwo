import React from 'react'
import ListingChild from './ListingChild';


const AllProducts = () => {
    const items = [
        {
          image: '/pots.jpg',
          category: 'Rustic Vase Set',
          price: '£125',
        },
        {
          image: '/clay.jpg',
          category: 'The Silky Vase',
          price: '£155',
        },
        {
          image: '/chair.jpg',
          category: 'The Dandy Char',
          price: '£155',
        },
        {
          image: '/light.jpg',
          category: 'The Lucy Lamp',
          price: '£399',
        },
        {
            image: '/plant.jpeg',
            category: 'The Lucy Lamp',
            price: '£399',
          },
          {
            image: '/room.jpeg',
            category: 'The Lucy Lamp',
            price: '£399',
          },
          {
            image: '/chair.jpg',
            category: 'The Dandy Char',
            price: '£155',
          },
          {
            image: '/pots.jpg',
            category: 'Rustic Vase Set',
            price: '£125',
          },
          {
            image: '/clay.jpg',
            category: 'The Silky Vase',
            price: '£155',
          },
          {
            image: '/chair.jpg',
            category: 'The Dandy Char',
            price: '£155',
          },
          {
            image: '/light.jpg',
            category: 'The Lucy Lamp',
            price: '£399',
          },
          {
              image: '/plant.jpeg',
              category: 'The Lucy Lamp',
              price: '£399',
            },
      ];
  return (
    <div className='flex  flex-col justify-center items-center h-max-[1052px] max-w-[1440px] m-auto  '>
       
    <div className='w-11/12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-2 m-auto'>

    {items.map((item,index)=>(
        <div className='w-full'>
                <ListingChild
                key={index}
                image={item.image}
                category={item.category}
                price={item.price} />
        </div>

    ))}
    
    </div>
    <div className='flex justify-center w-full my-4'>
        <button className=' m-auto w-full sm:w-[190px] h-[64px] py-4 px-8 font-normal text-4 leading-6 bg-gray-100'> View Collection</button>
        
    </div>

    </div>

  )
}

export default AllProducts