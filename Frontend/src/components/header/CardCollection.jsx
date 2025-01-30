import React from 'react'
import { CardGirl } from './CardGirl'

const CardCollection = () => {
  return (
    <div className='flex justify-center flex-wrap gap-1'>
        <CardGirl/>
        <CardGirl/>
        <CardGirl/>
        <CardGirl/>
        <CardGirl/>
        <CardGirl/>
    </div>
  )
}

export default CardCollection