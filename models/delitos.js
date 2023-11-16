const {Schema, model} = require('mongoose');

const DelitosSchema = ({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    tipoHurto:{
        type:String,
        required:[true, 'El tipo de hurto es requerido']
    },
    direccion:{
        type:String,
        required:[true, 'la dirección del hurto es requerida']
    },
    fecha:{
        type:String,
        required:[true, 'la fecha del hurto es requerida']
    },
    ciudad:{
        type:String,
        required:[true, 'la ciudad del hurto es requerida']
    },
    descripcion:{
        type:String,
        required:[true, 'la descripción del hurto es requerida'],
        min:[4, 'La descripción debe tener como mínimo cuatro caracteres'],
        max:[100, 'La descripción puede contener como máximo cien caracteres']
    }
});

module.exports = model('Delitos', DelitosSchema);