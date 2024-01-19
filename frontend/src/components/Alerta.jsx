const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "bg-red-600" : "bg-indigo-600"
      } text-center text-white font-bold text-xl p-2 rounded-xl`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
