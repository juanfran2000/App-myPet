const Form = () => {
  return (
    <div className="bg-zinc-100 w-96 p-6 rounded-lg  shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Contacto</h2>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-600">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-zinc-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="apellido" className="block text-gray-600">
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-zinc-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-zinc-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mensaje" className="block text-gray-600">
          Escribir un mensaje:
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="w-full border border-zinc-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-900 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
      >
        Enviar
      </button>
      <div className="mt-4">
        <h2 className="text-sm font-semibold text-black">
          Gracias por completar el formulario!
        </h2>
      </div>
    </div>
  );
};

export default Form;
