var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({data: [{
    id:"1",
    nombre: "usuario 1",
  },{
    id:"2",
    nombre: "usuario 2",
  }
  ,{
    id:"3",
    nombre: "usuario 3",
  }
]
});
});

module.exports = router;
