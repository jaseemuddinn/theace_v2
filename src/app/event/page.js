'use client';
import React, { lazy, Suspense } from 'react'
import Hero from './components/Hero'
import SkeletonCard from './components/Skeleton'
import Contact from './components/Contact';

const About = lazy(() => import('./components/About'))
const Register = lazy(() => import('./components/Register'))
const Upcoming = lazy(() => import('./components/Upcoming.js'))
function page() {
  return (
    <div className='font-Montserrat'>
      <Hero />
      <Suspense
        fallback={
          <div>
            <SkeletonCard />
          </div>
        }
      >
        <About />
        <Upcoming />
        <Register />
        <Contact />
      </Suspense>
    </div>
  )
}

export default page