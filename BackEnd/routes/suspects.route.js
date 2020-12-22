const router = require('express').Router();
const suspectController = require('../controllers/suspect.controller.js');

router.get('/', function(req, res) {

    res.send('Projeto PSP');
    res.end();
});


router.get('/all', suspectController.getSuspects);
router.get('/:id', suspectController.getSuspectId);
router.post('/postSuspect',suspectController.postSuspect);
router.put("/del/:id",suspectController.deleteSuspectL);
router.delete("/:id",suspectController.deleteSuspectF);
router.put("/:id",suspectController.updateSuspect);


//No final do DOC
module.exports = router ;