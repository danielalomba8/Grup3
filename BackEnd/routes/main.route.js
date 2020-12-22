const router = require('express').Router();
const userController = require('../controllers/user.controller.js');
const suspectController = require('../controllers/suspect.controller.js');


router.get('/', function(req, res) {

    res.send('Projeto PSP');
    res.end();
});

router.get('/Suspect', suspectController.getSuspects);
router.get('/Suspect/:id', suspectController.getSuspectId);
router.post('/postSuspect',suspectController.postSuspect);
router.get('/User',userController.getUser);
router.put("/Suspect/del/:id",suspectController.deleteSuspectL);
router.delete("/Suspect/:id",suspectController.deleteSuspectF);
router.put("/Suspect/:id",suspectController.updateSuspect);


//No final do DOC
module.exports = router ;