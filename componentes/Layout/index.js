import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ( { children }) => {
  return (

    <div>
      <div className="bg-gray-200 p-2 shadow-lg" >
      <Header/>
      </div>      
    
      <div className="container mx-auto">
       { children }
      </div>

      <div className="bg-gray-700 p-3 shadow-lg" >
      <Footer/>
      </div> 
    </div>
  
  )
}

export default Layout