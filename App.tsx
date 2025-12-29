import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Segmentation from './components/Segmentation';
import AboutDoctors from './components/AboutDoctors';
import Services from './components/Services';
import TreatmentEducation from './components/TreatmentEducation';
import ClinicFeatures from './components/ClinicFeatures';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import TimeDelayedPopup from './components/TimeDelayedPopup';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Segmentation />
        <ClinicFeatures />
        <WhyChooseUs />
        <AboutDoctors />
        <Services />
        <TreatmentEducation />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
      <TimeDelayedPopup />
    </div>
  );
};

export default App;