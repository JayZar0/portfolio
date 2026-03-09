// 'use client'

// import { Tabs, Tab, Box, Typography } from "@mui/material"
// import { useEffect, useState, useRef } from "react"

// export default function NavBarComponent() {
//   // State to manage the active tab
//   const [activeTab, setActiveTab] = useState(0);

//   // Refs for the sections
//   const sectionRefs = useRef([]);
//   // Add refs for all sections you have (e.g., sectionRefs.current[0], sectionRefs.current[1], etc.)

//   const handleChange = (event: Event, newValue: number) => {
//     setActiveTab(newValue);
//     // Smooth scroll to the corresponding section when a tab is clicked
//     gsap.to(window, {
//       scrollTo: sectionRefs.current[newValue].offsetTop,
//       duration: 0.5,
//       ease: "power2.inOut"
//     });
//   };

//   useEffect(() => {
//     // Ensure the refs are available
//     if (sectionRefs.current.length === 0) return;

//     // Create ScrollTriggers for each section
//     sectionRefs.current.forEach((section, index) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center", // Trigger when the top of the section hits the center of the viewport
//         onEnter: () => setActiveTab(index), // Update tab when entering
//         onLeaveBack: () => setActiveTab(index - 1 < 0 ? 0 : index - 1), // Update tab when scrolling back up
//       });
//     });

//     // Clean up ScrollTriggers on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <Tabs
//       orientation="vertical"
//       variant="scrollable"
//       value={activeTab}
//       onChange={handleChange}
//       sx={{ borderRight: 1, borderColor: 'divider', position: 'fixed', filter: 'brightness(2)' }}
//       className='z-3000 h-screen w-62.5'
//     >
//       <Tab label="John Lazaro" href='#about' />
//       <Tab label="Experience" href='#experience' />
//       <Tab label="Technology and Languages" href='#tech' />
//       <Tab label="Contact Me" href='#contact' />
//       <Tab label="Projects" href='#projects' />

//       <Box ref={el => sectionRefs.current[0] = el} sx={{ height: '100vh', paddingTop: '64px' /* Adjust based on Tabs height */ }}>
//         <Typography variant="h2">Section 1 Content</Typography>
//       </Box>
//       <Box ref={el => sectionRefs.current[1] = el} sx={{ height: '100vh' }}>
//         <Typography variant="h2">Section 2 Content</Typography>
//       </Box>
//       <Box ref={el => sectionRefs.current[2] = el} sx={{ height: '100vh' }}>
//         <Typography variant="h2">Section 3 Content</Typography>
//       </Box>
//     </Tabs>
//   )
// }

'use client';
import { useRef, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSpyTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef('');

  useGSAP(() => {
    // Select sections
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section as gsap.DOMTarget,
        start: 'top 50%', // Active when top of section hits 50% of viewport
        end: 'bottom 50%',
        onEnter: () => setActiveTab(i),
        onEnterBack: () => setActiveTab(i),
      });
    });
  }, { scope: containerRef });

  return (
    <Box ref={containerRef} sx={{ display: 'flex' }}>
      <Tabs
        orientation="vertical"
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        sx={{ borderRight: 1, borderColor: 'divider', position: 'fixed', zIndex: 3000 }}
        className='bg-[#8374748b] h-screen'
      >
        <Tab label="John Lazaro" href='#about' />
        <Tab label="Experience" href='#experience' />
        <Tab label="Tools and Technology" href='#tech' />
        <Tab label="Contact Me" href='#contact' />
        <Tab label="Projects" href='#projects' />
      </Tabs>

      <Box sx={{ ml: '150px' }}>
        <div id='about' className="section" style={{ height: '100vh' }}></div>
        <div id='experience' className="section" style={{ height: '100vh' }}></div>
        <div id='tech' className="section" style={{ height: '100vh' }}></div>
        <div id='contact' className="section" style={{ height: '100vh' }}></div>
        <div id='projects' className="section" style={{ height: '1vh' }}></div>
      </Box>
    </Box>
  );
}