var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    data: [{
      nombre: "Jorge",
      apellido: "Marquez",
      puesto: "Desarrollador de software"
    }]
  });
});

module.exports = router;
