import 'tailwindcss/tailwind.css'
import React from 'react'
import { useEffect, useState } from 'react';



export default function Cliente30() {
  const [cliente30, setCliente30] = useState([]);

  async function obterCliente30() {
    const resp = await fetch('http://localhost:3000/api/get30')
    const dados = await resp.json()
    setCliente30(dados);
  }


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // + item.telefone,
  async function enviarMensagem() {

    var dia = "em: *30 dias*";

    let data = new Date();
    let dataFormatada = ((data.getDate() + 30)) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
    // console.log(dataFormatada);

    await cliente30.forEach((item) => {
      var smsScript = "Prezado Cliente \n \nEstamos entrando em contato para informar que o seu Certificado digital \nModelo: *" + item.tipocd + ". - " + item.nome + "* \nExpira " + dia + " " + dataFormatada + "      \nfc:" + item.id + "       \n \nNão deixe para a última hora, ligue agora          \npara (16) 3325-4134 e renove o seu certificado.          \nAtenciosamente Equipe Rede Brasil Rp"
      
      var myHeaders = new Headers();
      myHeaders.append("access-token", "60de0c8bb0012f1e6ac5546b");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "number": 55 + item.telefone,
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
    })
    await sleep(20000);
    console.log('proximo')
    for (let i = 0; i < cliente30.length; i++) {
      if (i === 4)
        await sleep(20000);
      console.log(i)
    }

  }


  // const enviarMensagem = () => {
  // setTimeout(() => {
  // cliente30.forEach((item) => {
  //   var smsScript = "Prezado Cliente     Estamos entrando em contato para informar que o seu Certificado digital:     Modelo: *" + item.tipocd + ". - " + item.nome + "* Expira em: 30 dias        fc:" + item.id + "            Não deixe para a última hora, ligue agora            para (16) 3325-4134 e renove o seu certificado.            Atenciosamente Equipe Rede Brasil Rp"

  //   var myHeaders = new Headers();
  //   myHeaders.append("access-token", "60de0c8bb0012f1e6ac5546b");
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "number": 55 + item.telefone,
  //     "message": smsScript,
  //     "forceSend": true,
  //     "verifyContact": true
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };
  //   fetch("https://api.zapstar.com.br/core/v2/api/chats/send-text", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // })
  // }, 20000);
  // }

  console.log(cliente30)


  useEffect(() => {
    obterCliente30();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex-initial my-1.5">
        <p>30 dias:
          <a className="ml-4 mt-2 text-black">
            {cliente30.length} para entrar em contato
          </a>
          <button type="button" onClick={enviarMensagem} className="ml-4 px-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">ENTRAR EM CONTATO</button>
        </p>
      </div>
    </div>
  )
}

