import React from 'react'
import Heading from '../../components/Header'
import {ContactInfo, Form} from '../../components/index'

const page = () => {
  return (
    <div>
      <Heading heading="Contacts" />
      <ContactInfo/>
      <Form/>
    </div>
  )
}

export default page