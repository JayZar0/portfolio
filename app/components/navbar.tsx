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
        <div id='about' className="section" style={{ height: '160vh' }}></div>
        <div id='experience' className="section" style={{ height: '175vh' }}></div>
        <div id='tech' className="section" style={{ height: '170vh' }}></div>
        <div id='contact' className="section" style={{ height: '160vh' }}></div>
        <div id='projects' className="section" style={{ height: '100vh' }}></div>
      </Box>
    </Box>
  );
}