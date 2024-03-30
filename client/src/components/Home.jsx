import React from 'react'
import Hero from './Hero'
import About from './About'
import Service from './Service'
import Portfolio from './Portfolio'
import MyClient from './MyClient'
import MySkills from './MySkills'
import Education from './Education'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Service/>
      <MySkills/>
      <Education/>
      <Portfolio/>
      <MyClient/>
      <Contact/>
    </>
  )
}
