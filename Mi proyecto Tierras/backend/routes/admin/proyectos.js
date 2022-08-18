var express = require('express');
var router = express.Router();
var proyectosModel = require('./../../models/proyectosModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  var proyectos = await proyectosModel.getProyectos()
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
    if (req.body.proyecto != "" && req.body.descripcion != "" && req.body.foto != "") {
      await proyectosModel.insertProyecto(req.body);
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

router.get('/eliminar/:id', async (req, res, next) =>{
  var id = req.params.id;
  await proyectosModel.deleteProyectosById(id);
  res.redirect('/admin/proyectos');
});

// para listar una solo proyecto by id
router.get('/modificar/:id', async (req,res,next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var proyecto = await proyectosModel.getProyectoById(id);
  
  res.render ('admin/proyectos/modificar' , {
    layout: 'admin/layout',
    proyecto
  })
});
// para modificar el proyecto
router.post('/modificar', async (req, res, next) =>{
  try{
    var obj = {
      proyecto: req.body.proyecto,
      descripcion: req.body.descripcion,
      foto: req.body.foto
    }
    console.log(obj)

    await proyectosModel.modificarProyectoById(obj, req.body.id);
    res.redirect('/admin/proyectos');
  }catch (error){
    console.log(error)
    res.render('admin/proyectos/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el proyecto'
    })
  }
})




module.exports = router;
