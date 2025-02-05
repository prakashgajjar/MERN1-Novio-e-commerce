import React from 'react'
import Text1 from './Text1'
import StoreCard from './StoreCard'
import CollectionOfCard from './CollectionOfCard'
import Footer from '../footer/Footer'

const StorePage = () => {
  return (
    <div>
      <div className='relative z-20'>
        <Text1/>
    </div>
   <div className='mt-20'>
   <CollectionOfCard/>
   </div>
    <div className=''>
      <Footer/>
    </div>
    </div>
  )
}

export default StorePage