
import Hero from '../components/Hero'
import Header from '../components/Header'
import React from 'react'

export default function Homepage() {
  return (
    <div className='h-[100vh] 
    bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-sky-100 to-stone-200'>
      <Hero/>
    </div>
  )
}
