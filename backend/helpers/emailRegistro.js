import nodemailer from "nodemailer";

const emailRegistro = async(datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const {email, nombre, token} = datos

  const info = await transport.sendMail({
    from: "Administrador de pacientes",
    to: email,
    subject: "Confirma tu cuenta",
    html: `<p>Hola ${nombre}, comprueba tu cuenta de Administrador de pacientes</p> <p>Comprueba tu cuenta con el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta </a></p>`
  })

  console.log(info);
};

export default emailRegistro;
