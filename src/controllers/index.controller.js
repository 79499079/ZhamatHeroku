const nodemailer = require('nodemailer')

const indexCtrl = {};

indexCtrl.indexPrincipal = (req, res) => {
  res.render('index');  
};

indexCtrl.enviaEmail = async (req, res) => {
  
  const {nombre, email, whatsapp, mensaje} = req.body
  contentHTML = `
    <h3>Solicitud de Información para CréditoSonivision</h3>
    <ul><h4>
      <li>Cliente: ${nombre}</li>
      <li>Email de Uusario: ${email}</li>
      <li>Teléfono: ${whatsapp}</li>    
    </h4></ul>
    <p><h4>Mensaje: ${mensaje}</h4></p>`

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVICE,
      port: process.env.PUERTO,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })
    
    const mailOptions = {
      from: process.env.MAIL_FROM, 
      to: process.env.MAIL_TO,
      subject: 'Informacion a Zhamat Sistemas',
      html: contentHTML
    }

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('mensaje enviado', info.messageId, info.response)
      res.render('emailok');
    });  
}

module.exports = indexCtrl;