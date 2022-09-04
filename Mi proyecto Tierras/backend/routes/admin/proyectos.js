var express = require('express');
var router = express.Router();
var proyectosModel = require('./../../models/proyectosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {
  var proyectos = await proyectosModel.getProyectos();

  proyectos = proyectos.map(proyecto => {
    if (proyecto.img_id) {
      const imagen = cloudinary.image(proyecto.img_id, {
        width: 70,
        height: 70,
        crop: 'fill'
      });
      return {
        ...proyecto,
        imagen
      }
    } else {
      return {
        ...proyecto,
        imagen: ''
      }
    }
  });

  res.render('admin/proyectos/proyectos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    proyectos
  });

});


router.get('/agregar', (req, res, next) => {
  res.render('admin/proyectos/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {
    
    var img_id = '';
    
    
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    
    if (req.body.proyecto != "" && req.body.descripcion != "") {
      await proyectosModel.insertProyecto({
        ...req.body,
        img_id
      })
     res.redirect('/admin/proyectos')
    } else {
      res.render('admin/proyectos/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/proyectos/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el proyecto '
    })
  }
})


router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  

  let proyecto = await proyectosModel.getProyectoById(id);
  if (proyecto.img_id) {
    await (destroy(proyecto.img_id));
  }
  
  
  await proyectosModel.deleteProyectosById(id);
  res.redirect('/admin/proyectos');
});

// para listar una solo proyecto by id
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var proyecto = await proyectosModel.getProyectoById(id);

  res.render('admin/proyectos/modificar', {
    layout: 'admin/layout',
    proyecto
  })
});
// para modificar el proyecto

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;

    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      proyecto: req.body.proyecto,
      descripcion: req.body.descripcion,
      img_id

    }
    console.log(obj)

    await proyectosModel.modificarProyectoById(obj, req.body.id);
    res.redirect('/admin/proyectos');
  } catch (error) {
    console.log(error)
    res.render('admin/proyectos/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el proyecto'
    })
  }
})




module.exports = router;
