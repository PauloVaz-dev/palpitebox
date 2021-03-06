import React from 'react'
import Link from 'next/link'
import userSWR from 'swr'
import PageTitle from '../componentes/PageTitle'

const fetcher = (...args) => fetch(...args).then( res => res.json())

const Index = () => {

  const { data, error} = userSWR('/api/get-promo', fetcher)

  return (
    <div>
       <PageTitle title="Home"/>
      <p className="mt-12 ml-6 mr-6 text-center">
        O restaurante X sempre busca por atender melhor seus clientes. <br/>
        Por isso, estamos sempre abertos a ouvir a sua opinião
        </p>
      <div className="text-center my-12">
        <Link href="pesquisa">
        <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow">Dar opinião ou sugestão</a>
        </Link>
        
      </div>
      <div className="my-12 text-center">{ !data && <a>Carregando...</a>}</div>
      
      { !error && data && data.showCoupon && 
        <p className="my-12 ml-6 mr-6 text-center">
          { data.message}
        </p>
      }
    </div>
  )
}

export default Index