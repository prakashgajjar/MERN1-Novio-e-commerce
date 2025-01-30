import React from 'react'
import Navbar from './header/navbar'
import Text from './header/Text'
import Video from './header/video'
import CardCollection from './header/CardCollection'
import SmallText from './componets/SmallText'
import MidBanner from './componets/MidBanner'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Text />
      <Video />
      <SmallText name = "Excellence for 2025" />
      <CardCollection />
      <MidBanner />
      <SmallText name = "Good Things Never Last"/>

    </div>
  )
}

export default Home