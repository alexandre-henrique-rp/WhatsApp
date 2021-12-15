import 'tailwindcss/tailwind.css'
import React from 'react'
import { useEffect, useState } from 'react';


export default function Cliente10() {
  const [cliente10, setCliente10] = useState([])

  async function obterCliente10() {
    const resp = await fetch('http://localhost:3000/api/get10')
    const dados = await resp.json()
    setCliente10(dados);
  }

  function enviarMensagem() {
    cliente10.forEach(function (item, index) {
      setTimeout(function () {
        
        var dia = "em: *10 dias*"
        var smsScript = "Prezado Cliente \n \nEstamos entrando em contato para informar que o seu Certificado digital \nModelo: *" + item.tipocd + ". - " + item.nome + "* \nExpira " + dia + "          " + item.vctoCD.substr(8, 2) + "/" + item.vctoCD.substr(5, 2) + "/" + item.vctoCD.substr(0, 4) + "            \nfc:" + item.id + "       \n \nNão deixe para a última hora, ligue agora          \npara (16) 3325-4134 e renove o seu certificado.          \nAtenciosamente Equipe Rede Brasil Rp"
  
        var myHeaders = new Headers();
        myHeaders.append("access-token", "60de0c8bb0012f1e6ac5546b");
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          "number": 55 + item.telefone,
          // "number": 5516988247675,
          "message": smsScript,
          "forceSend": true,
          "verifyContact": false
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
      }, index * 20000);
    });
  }

  useEffect(() => {
    obterCliente10();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex-initial my-1.5">
        <p>
          10 dias:
          <a className="ml-4 mt-2 text-black">
            {cliente10.length} para entrar em contato
          </a>
          <button type="button" onClick={enviarMensagem} className="ml-4 px-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">ENTRAR EM CONTATO</button>
        </p>
      </div>
    </div>
  )
}