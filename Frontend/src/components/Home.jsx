import React from 'react'
import Navbar from './header/navbar'
import Text from './header/Text'
import Video from './header/video'
import CardCollection from './header/CardCollection'
import SmallText from './componets/SmallText'
import MidBanner from './componets/MidBanner'
import CardCollectionOfBgChnager from './componets/CardCollectionOfBgChnager'
import Footer from './footer/Footer'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Text />
      <Video />
      <SmallText name = "Excellence for 2025" />
      <CardCollection />
      <MidBanner />
      <SmallText name = "Good Things Never Last"/>
      <CardCollectionOfBgChnager />
      <Footer/> 

    </div>
  )
}

export default Home