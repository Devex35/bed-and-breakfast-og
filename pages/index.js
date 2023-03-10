import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Contact from '../components/Contact';
import Gallery from '../components/Gallary';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Neigbarhoods from '../components/Neigbarhoods';
import Propertydescripton from '../components/PropertyDescription';
import Propertyfeatures from '../components/PropertyFeatures';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Testimonials from '../components/Testimonial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>b&b</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Simons bed and breakdfast' message='Welcome to ' />
      {/* <Slider slides={SliderData} /> */}
      <Propertyfeatures/>
      <Propertydescripton/>
      <About/>   
      <Amenities/>
      <Gallery/>
      <Neigbarhoods/>
      <Testimonials/>
      <Contact/>
      <Instagram />
    </div>
  );
}
