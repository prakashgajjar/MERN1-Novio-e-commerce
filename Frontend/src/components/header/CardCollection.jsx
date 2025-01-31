import React from 'react'
import { CardGirl } from './CardGirl'

const CardCollection = () => {
  return (
    <div className='flex justify-center flex-wrap gap-1'>
        <CardGirl imgUrl="\images\1.avif"/>
        <CardGirl imgUrl="\images\2.avif"/>
        <CardGirl imgUrl="\images\3.avif"/>
        <CardGirl imgUrl="\images\4.avif"/>
        <CardGirl imgUrl="\images\5.avif"/>
        <CardGirl imgUrl="\images\6.avif"/>
    </div>
  )
}

export default CardCollection