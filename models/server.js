const express = require('express');
const {dbConection} = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.delitosPath = '/delitos'
        this.routes();
        this.conectarDB();
    }

    listen = () => {
        this.app.listen(
            this.port, () => {
                console.log('escuchando en el puerto' + this.port)
            }
        )
    }

    routes() {
        this.app.use(this.delitosPath, require('../routes/delitos'))
    }

    async conectarDB() {
        await dbConection();
    }
}

module.exports = {Server}