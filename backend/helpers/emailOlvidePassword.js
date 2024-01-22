import nodemailer from "nodemailer";

const emailOlvidePassword = async(datos) => {
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
    subject: "Recuperar acceso a tu cuenta",
    html: `<p>Hola ${nombre}, para recuperar el acceso a tu cuenta</p> <p>accede al siguiente enlace: <a href="${process.env.FRONTEND_URL}/olvidepassword/${token}">Recuperar acceso </a></p>`
  })

  console.log(info);
};

export default emailOlvidePassword;