"use client"
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/landingPageComponents/AppAppBar';
import Hero from '../components/landingPageComponents/Hero';
import LogoCollection from '../components/landingPageComponents/LogoCollection';
import Highlights from '../components/landingPageComponents/Highlights';
import Pricing from '../components/landingPageComponents/Pricing';
import Features from '../components/landingPageComponents/Features';
import Testimonials from '../components/landingPageComponents/Testimonials';
import FAQ from '../components/landingPageComponents/FAQ';
import Footer from '../components/landingPageComponents/Footer';
import Particles from '../components/motions/particle';

export default function LandingPage() {

  return (
    <>
      {/* <Particles quantity={100} /> */}
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
