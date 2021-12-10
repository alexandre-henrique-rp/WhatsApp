import 'tailwindcss/tailwind.css';
import React from 'react';
import Link from 'next/link';
import Cliente30 from './componentes/cliente30';
import Cliente15 from './componentes/cliente15';
import Cliente10 from './componentes/cliente10';
import Cliente05 from './componentes/cliente05';
import Cliente01 from './componentes/cliente01';
import ClienteNow from './componentes/clienteNow';

export default function Home() {

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto my-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
        <div>
          <button type="button" className="py-1 px-2 mr-32 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Gerar lista</button>
          <Link href="/Lista">
            <button type="button" className="py-1 px-2 mr-32 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">Retirar da lista</button>
          </Link>
        </div>
        <div>
          <div>
            <h3 className="block mt-1 text-lg leading-tight font-medium text-black">Ha vencer</h3>
            <div className="mt-2 text-gray-500">
              <div className="flex-initial"><p>Alerta de cliente com vencimento proximo</p></div>
              <Cliente30 />
              <Cliente15 />
              <Cliente10 />
              <Cliente05 />
              <Cliente01 />
              <ClienteNow />
            </div>
          </div>
          
        </div>
        <div>
          <div>
            <h3 className="block mt-1 text-lg leading-tight font-medium text-black">Vencidas</h3>
            <div className="mt-2 text-gray-500">
              <p>Alerta de cliente com certificado vencido</p>
              <p>1 dias: <a className="mt-2 text-black"></a></p>
              <p>5 dias: <a className="mt-2 text-black"></a></p>
              <p>10 dias: <a className="mt-2 text-black"></a></p>
              <p>15 dias: <a className="mt-2 text-black"></a></p>
              <p>30 dias: <a className="mt-2 text-black"></a></p>
            </div>
          </div>
          <button type="button" className="py-1 px-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Enviar mensagem</button>
        </div>

      </div>
    </div>
  )
}


// https://help.zapstar.com.br/c/integrations