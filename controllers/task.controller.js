const express = require('express')
const router = express.Router()

var nameT = {
    name: "Shiva Jee_sus",
    sex: "holy",
}

var array = [1,2,3]

var objArr = [nameT, nameT, nameT]

router.route('/a')
    .get(function(req, res, next) {
        res.send(nameT)
    })
    .put()
    .post()
    .delete()

router.route('/b')
    .get(function(req, res, next) {
        res.send(array)
    })
    .put()
    .post()
    .delete()

router.route('/c')
    .get(function(req, res, next) {
        res.send(objArr)
    })
    .put()
    .post()
    .delete()

router.route('/:id')
    .get(function(req, res, next) {
        res.json({
            params_ko_value: req.params.id
        })
    })
    .put()
    .post()
    .delete()

module.exports = router