import 'tailwindcss/tailwind.css'
import React from 'react'
import { useEffect, useState } from 'react';




export default function Lista() {
  const [cliente, setCliente] = useState([])


  async function obterCliente() {
    const resp = await fetch('http://localhost:3000/api/get')
    const dados = await resp.json()
    setCliente(dados);
  }

  const itensDb = cliente.map(function (item) {


    return (
    
    < tr key = { item.id } className = "border-collapse border-2 border-black table-fixed" >
        <input type="checkbox" className="mt-8 items-center w-16 border border-black" />
        <td className="w-24 text-center border border-black">{item.id}</td>
        <td className="w-24 text-center border border-black" >{item.vctoCD}</td>
        <td className="w-28 text-center border border-black">{item.tipocd}</td>
        <td className="w-44 text-center border border-black">{item.telefone}</td>
        <td className="w-60 text-center border border-black">{item.nome}</td>
        <button onClick={function () { apagarClient(item.id) }} className="py-1 px-2 m-5 bg-green-500 text-white font-semibold rounded-lg shadow-md  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Apagar</button>
      </tr >

    );
  });
  console.log(cliente)

  useEffect(() => {
    obterCliente();
  }, []);


  return (
    <div className="container mx-auto">
      <div>
        <h1>total de chamados</h1>
        <p>{cliente.length}</p>
      </div>
      <table className="border-collapse border-2 border-black table-fixed">
        <thead>
          <tr>
            <input type="checkbox" className="mt-8 items-center w-16 border border-black" />
            <th className="w-24 text-center border border-black">Ficha</th>
            <th className="w-24 text-center border border-black">Data de vencimento</th>
            <th className="w-28 text-center border border-black">Tipo de certificado</th>
            <th className="w-44 text-center border border-black">Tel</th>
            <th className="w-60 text-center border border-black">Nome/Razão</th>
            <th className="w-40 text-center border border-black"></th>
          </tr>
        </thead>
        <tbody>
          {itensDb}
        </tbody>
      </table>
      <h1>oi</h1>

    </div>
  )
}


