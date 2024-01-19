const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesión</h1>
      </div>

      <div>
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="Ingresa tu email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Ingresa tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input
            type="submit"
            value="Iniciar sesión"
            className="bg-indigo-700 py-2 px-6 rounded-xl w-full text-white font-bold mt-5 cursor-pointer hover:bg-indigo-800
            md:w-auto"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
