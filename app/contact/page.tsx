'use client'
import React, {useEffect} from 'react'
import Heading from '../../components/Header'
import {ContactInfo, Form} from '../../components/index'
import AOS from  "aos";
import "aos/dist/aos.css";

const page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Heading heading="Contacts" />
      <ContactInfo/>
      <Form/>
    </div>
  )
}

export default page