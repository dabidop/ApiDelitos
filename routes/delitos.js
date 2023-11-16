const {Router} = require('express');

const route = Router();

const{getDelito, postDelito, putDelito, deleteDelito} = require('../controller/delitos');

route.get('/', getDelito)
route.post('/', postDelito)
route.put('/', putDelito)
route.delete('/', deleteDelito)

module.exports = route