import React from 'react'


function Hero({onNavigate}) {

  return (
      <section className='bg-gray-900 w-full min-h-screen flex flex-col items-center justify-center'>

        <div className='text-white text-2xl font-semibold mb-10 '>
        <h1 className='text-4xl mb-5'>Marketplace <span className='bg-purple-900 p-1 text-center rounded-xl '>Saquarema</span></h1>
        <h2 className='font-normal'>Você pode ser vendedor ou comprador!</h2>
        <p className='font-normal'>Compre e venda de forma fácil e segura, apoiando o comércio local.</p>
        </div>

        <div className='text-white flex gap-16 items-center justify-center'>
            <button onClick={() => onNavigate('about')} className='bg-purple-900 p-5 px-10 rounded-xl font-bold text-xl hover:bg-purple-950'>Ser  Vendedor</button>
            <button onClick={() => onNavigate('Marketplace')} className='bg-white hover:bg-slate-500 p-5 px-10 rounded-xl font-bold text-xl text-purple-900'>Ser Comprador</button>
        
             
        </div>
        


      



      </section>    
  )
}

export default Hero