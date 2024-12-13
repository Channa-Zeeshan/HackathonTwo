import React from 'react'

const FeatureChild = (props:any) => {
  return (
    <div className='p-8 '>
        <div  className='my-5'>
            {props.icon}

        </div>
        <div className='text-2xl  mb-2' >
            {props.heading}

        </div>
        <div >
            {props.paragraph}

        </div>
    </div>
  )
}

export default FeatureChild