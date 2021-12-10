import 'tailwindcss/tailwind.css'
import React from 'react'
import { useEffect, useState } from 'react';


export default function Cliente01() {
  const [cliente01, setCliente01] = useState([])


  async function obterCliente01() {
    const resp = await fetch('http://localhost:3000/api/get01')
    const dados = await resp.json()
    setCliente01(dados);
  }

  const enviarMensagem = () => {

    var dia = "em: *1 dia*"
    // setTimeout(() => {
    cliente01.forEach((item) => {
      var smsScript = "Prezado Cliente     Estamos entrando em contato para informar que o seu Certificado digital:     Modelo: *" + item.tipocd + ". - " + item.nome + "* Expira " + dia + "        fc:" + item.id + "            Não deixe para a última hora, ligue agora            para (16) 3325-4134 e renove o seu certificado.            Atenciosamente Equipe Rede Brasil Rp"

      var myHeaders = new Headers();
      myHeaders.append("access-token", "60de0c8bb0012f1e6ac5546b");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "number": 55 + item.telefone,
        "message": smsScript,
        "forceSend": true,
        "verifyContact": true
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };


      fetch("https://api.zapstar.com.br/core/v2/api/chats/send-text", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })
    // }, 20000);
  }

  console.log(cliente01)
  useEffect(() => {
    obterCliente01();
  }, []);



  return (
    <div className="container mx-auto">
      <div className="flex-initial my-1.5">
        <p>
          1 dias:
          <a className="ml-4 mt-2 text-black"> {cliente01.length} para entrar em contato</a>
          <button type="button" onClick={enviarMensagem} className="ml-4 px-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">ENTRAR EM CONTATO</button>
        </p>
      </div>
    </div>
  )
}