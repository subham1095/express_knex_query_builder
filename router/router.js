const router = require("express").Router();

const { checkToken } = require("../app/middleware/token_validation");

const {
    getUsers,
    create,
    login,
    createtask,
    gettask,
    updatetask
  } = require("../app/controller/controller");

// router.get('/fetch',  function(req, res){
//   knex.select().from('registration').then(function(data){
//     res.send(data);
//   });
// });

// router.post('/insert',  function(req, res){
//   knex.insert(req.body).returning('*').into('registration')
//   .then(function (data){
//     res.send(data);
//   });
// } );
router.patch("/updatetask", checkToken, updatetask)
router.post("/createtask", checkToken, createtask)
router.get("/gettask", checkToken, gettask)
 router.get('/all', checkToken, getUsers)
router.post("/create", checkToken, create)
 router.post("/login", login)

 module.exports = router;