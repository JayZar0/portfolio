// components/IntroAnimation.jsx
'use client' // Required for client-side interactivity in the App Router

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Typography } from '@mui/material'

interface props {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: props) {
  const introRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useGSAP(() => {
    // Ensure the element is visible before the animation starts if needed
    gsap.set(introRef.current, { autoAlpha: 1 })

    // Create a GSAP timeline for your intro sequence
    const tl = gsap.timeline({
      onComplete: () => {
        // After the animation finishes, call the onComplete prop and hide the component
        setIsVisible(false)
        if (onComplete) onComplete()
      }
    })

    // Add your animations to the timeline
    tl.from(introRef.current, {
      opacity: 0,
      duration: 1,
      y: 100,
      ease: "power2.inOut"
    })
      .to(introRef.current, { // Example outro animation
        opacity: 0,
        duration: 0.5,
        delay: 2, // Stay visible for a second before fading out
        autoAlpha: 0 // Use autoAlpha for performance (sets opacity: 0 and visibility: hidden)
      })

  }, { scope: introRef }) // Scope the GSAP animations to the introRef element

  if (!isVisible) return null // Don't render anything if not visible

  return (
    <div ref={introRef}
      className="intro-overlay left-1/2 top-50 fixed z-9000"
    >
      <Typography variant='h2'>Hello, My Name Is</Typography>
      <Typography variant='h2'>John Lazaro</Typography>
      <Typography variant='h6'>And welcome to my portfolio</Typography>
    </div>
  )
}
