const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function enviarMailVerificacion(direccion, token) {
  return await transporter.sendMail({
    from: '"c20-34-n-node-react" <no_reply_verification1@outlook.com>',
    to: direccion,
    subject: "Verificacion de nueva cuenta - c20-34-n-node-react",
    html: crearMailVerificacion(token),
  });
}

function crearMailVerificacion(token) {
  return `
  <!DOCTYPE html>
  <html lang="es">
    <style>
      html{
        background-color: white;
      }
      body{
        max-width: 600px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: auto;
        background-color: rgb(229, 255, 246);
        padding: 40px;
        border-radius: 4px;
        margin-top: 10px;
      }
    </style>
  <body>
    <h1>Verificación de correo electrónico - c20-34-n-node-react</h1>
    <p>Se ha creado una cuenta en c20-34-n-node-react con este correo electrónico.</p>
      <p>Si esta cuenta no fue creada por usted, ignore este mensaje.</p>
      <p></p>Si usted creó la cuenta, entonces verifique la cuenta <a href="http://localhost:4000/${token}" target="_blank" rel="noopener noreferrer">haciendo click aquí</a>.</p>
      <p><strong>Simulación laboral</strong></p>
      <p>No-country</p>
  </body>
  </html>
  `;
}

module.exports = {
  enviarMailVerificacion,
};
