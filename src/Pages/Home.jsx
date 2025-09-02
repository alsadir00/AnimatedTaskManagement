import React from 'react'
import { FaqSection } from '../Components/Faq'
import BackToTopButton from '../Components/BackToTop'


function Home() {
  return (
    <div className='mx-10 md:mx-20 lg:mx-40 my-10 space-y-10'>

      <FaqSection />
      <BackToTopButton />
    </div>
  )
}

export default Home
