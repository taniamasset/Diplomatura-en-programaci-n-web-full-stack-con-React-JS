var express = require('express');
var router = express.Router();
var proyectosModel = require('./../models/proyectosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer')

router.get('/proyectos', async function (req, res, next) {
    let proyectos = await proyectosModel.getProyectos();

    proyectos = proyectos.map(proyectos => {
        if (proyectos.img_id) {
            const imagen = cloudinary.url(proyectos.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...proyectos,
                imagen
            }
        }else {
            return {
                ...proyectos,
                imagen: ''
            }
        }
    });
    res.json(proyectos);
});


router.post('/contacto', async (req,res) =>{
    const mail = {
        to: 'taniamasset@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br> Ademas, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'

    });
});
module.exports = router;