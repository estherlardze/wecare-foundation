import React from 'react'
import Header from '../../components/Header'
import {AboutFeature, Goal} from '../../components/index'

const page = () => {
  return (
    <div>
       <Header heading="About us"/>
      <AboutFeature/>
      <Goal/>
    </div>
  )
}

export default page