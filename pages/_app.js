import React from 'react'
import Layout from '../componentes/Layout'

import '../css/styles.css'

const MyApp = ( { Component , props}) => {
  return (
    <Layout>
      <Component { ...props }></Component>
    </Layout>
   
  )
}

export default MyApp