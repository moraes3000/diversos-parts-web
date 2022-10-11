import { useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const [telefoneCelular, setTelefoneCelular] = useState("");


  const onSubmit = async (event: { preventDefault: () => void; }) => {

    event.preventDefault();


    // await fetch("/api/formulario-contato/add", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     nome,
    //     email,
    //     comentario,
    //     telefoneCelular,

    //   }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
    // setNome("");
    // setEmail("");
    // setComentario("");
    // setTelefoneCelular("");
    toast.success("Formulário enviado com sucesso!")


  };
  return (
    <>
      <form onSubmit={onSubmit} className="my-4 max-w-5xl mx-auto p-5" id='contato'>
        <ToastContainer />
        <h2 className="text-custon-900 text-2xl font-poppins font-semibold  mb-5">Contato </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nome"
          >
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nome"
            type="text"
            placeholder="Nome"
            value={nome}
            // required
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="E-mail de contato"
            value={email}
            // required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefone"
          >
            Telefone / Whatsapp
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefone"
            type="text"
            placeholder="Telefone / Whatsapp"
            value={telefoneCelular}
            onChange={(event) => setTelefoneCelular(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comentario"
          >
            Comentário
          </label>
          <textarea
            id="comentario"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={comentario}
            placeholder="Comentário"
            // required
            onChange={(event) => setComentario(event.target.value)}
          />
        </div>
        <button
          className="shadow bg-gray-800 hover:bg-gray-600 
        focus:shadow-outline focus:outline-none 
        w-full md:w-auto
        text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  )
}