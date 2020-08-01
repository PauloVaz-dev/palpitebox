import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className="container mx-auto text-center font-bold text-white p-4">
      <div>Projeto feio por: Paulo Vaz {' / '}
        <a className="hover:underline" href="https://github.com/PauloVaz-dev">GitHub</a> {' / '}
        <a className="hover:underline" href="https://www.linkedin.com/in/paulo-vaz-05296a46">Linkedin</a>
        <div>
          <a target="_blank" href="https://www.devpleno.com/">
            <img className={styles.footer + ' w-48' } src="/logo_semana_fsm.png"/>
          </a>
          <a target="_blank" href="https://www.devpleno.com/">
            <img  className={styles.footer + ' sm:ml-6 w-48 sm:inline'  } src="/logo_devpleno.png"/>
          </a>
          
        </div>
      </div>
    </div>
    
  )
}

export default Footer