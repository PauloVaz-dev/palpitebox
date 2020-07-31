import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../componentes/PageTitle'

const Pesquisa = ()  => {
  const [ form, setForm ] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    nota: ''
  })

  const [ sucess, setSucess ] = useState(false)
  const [ retorno, setRetorno ] = useState({})

  const notas = [0,1,2,3,4,5]

  const save = async () => {
    const response = await fetch('api/save', {
      method: 'POST',
      body: JSON.stringify(form)
    })

    const data = await response.json()
    setSucess(true)
    setRetorno(data)
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => save();

  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa"/>
      <div className={styles.coverspins}>
           <div>Aguarde Carregando .....</div>
      </div>
      <h1 className="text-center font-bold my-4 text-2xl">Criticas e sugestões</h1>
        <p className="text-center mb-6">
          O restaurante X sempre busca por atender melhor seus clientes. <br/>
          Por isso, estamos sempre abertos a ouvir a sua opinião
        </p>
        { !sucess &&
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-1/5 mx-auto teste">
        <label className="font-bold">Seu nome {errors.nome && <span className={styles.errors}>Obrigatório</span>}</label>
            <input 
            className="p-4 mb-2 block w-full shadow bg-blue-200 mt-2 rounded-lg" 
            type="text"  
            placeholder="Nome" 
            onChange={onChange} name="nome" 
            ref={register({
              required: true, 
              maxLength: 80, 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              }})
            }
            value={form.nome}/>
            <label className="font-bold">Email {errors.email && <span className={styles.errors}>Obrigatório</span>}</label>
            <input className="p-4 mb-2 block w-full shadow bg-blue-200 mt-2 rounded-lg" type="text" placeholder="Email" onChange={onChange}  name="email" ref={register({required: true, maxLength: 80})} value={form.email}/>
            <label className="font-bold">Whatsapp {errors.whatsapp && <span className={styles.errors}>Obrigatório</span>}</label>
            <input className={'p-4 mb-2 block w-full shadow bg-blue-200 mt-2 rounded-lg'} type="text" placeholder="Whatsapp" onChange={onChange}  name="whatsapp" ref={register({required: true, maxLength: 80})}value={form.whatsapp}/>

            <label className="font-bold">Nota {errors.nota && <span className={styles.errors}>Obrigatório</span>}</label>
            <div className='flex py-2'>
              {
                notas.map( (nota, index) => {
                  return (
                    <label key={index} className="w-1/6 text-center">
                      {nota} <br/>
                      <input type='radio' name='nota'  value={nota} ref={register({required: true})} onChange={onChange}/>
                    </label>
                  )
                })              
              }
            </div>

            <button type="submit" className={'bg-blue-400 px-2 mb-6 py-4 font-bold rounded-lg shadow-lg hover:shadow  ' + styles.block } 
            onSubmit={handleSubmit(onSubmit)}>Save</button>
            
          </div>           
          </form>
           
        }
      { sucess && <div className="w-64 mx-auto">  
        <p className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
          Obrigado por contribuir com sua sugestão ou crítica
        </p>
        { retorno.showCoupon && 
          <div className="text-center p-4">
            Seu cupom <br/>
            <span className="block font-bold text-2xl">{retorno.Cupom}</span>
            <span className="">Tire uma foto e apresente na hora de pagar</span>
          </div>
        }
        { retorno.Promo && 
          <div className="text-center p-4 mb-6">
            {retorno.Promo}
          </div>
        }
      </div>
      }
      
     
    </div>
  )
}

export default Pesquisa