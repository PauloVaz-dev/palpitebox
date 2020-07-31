import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () =>{
  return (
    <React.Fragment> 
      <div className="flex justify-center container mx-auto" >
        <Link href="/">
          <a><img src="/logo_paplpitebox1.png" alt=""/></a>
        </Link> 
      </div>
      <div className="flex justify-center pt-2">
        <Link href="/sobre">
          <a className={'hover:underline ' +  styles.wrapper }>Sobre</a>
        </Link>
        <Link href="/contato">
          <a className={'hover:underline ' +  styles.wrapper }>Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className={'hover:underline ' +  styles.wrapper }>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>  
    
    
  )
}

export default Header