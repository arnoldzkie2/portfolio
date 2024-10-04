'use client'
import Contact from '@/components/Contact'
import Expertise from '@/components/Expertise'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Service from '@/components/Service'
import React, { useEffect, useRef } from 'react'
import AOS from 'aos'

const HomePage = () => {

  const sectionRefs = {
    Home: useRef(null),
    Introduction: useRef(null),
    Service: useRef(null),
    Expertise: useRef(null),
    Projects: useRef(null),
  };

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Header sectionRefs={sectionRefs} />
      <Main MainRef={sectionRefs.Home} />
      <Projects ProjectsRef={sectionRefs.Projects} />
      <Introduction IntroductionRef={sectionRefs.Introduction} />
      <Expertise ExpertiseRef={sectionRefs.Expertise} />
      <Service ServiceRef={sectionRefs.Service} />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage