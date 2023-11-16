const {response} = require('express')

const delito = require('../models/delitos')

const getDelito = async (req, res) => {
    const delitos = await delito.find(); //obtener todos los documentos de una colección
    res.json({
        msg: delitos
    })
};
// const postDelito = async (req, res) => {
//     const datos = req.query //capturar datos de postman

//     let mensaje = 'inserción exitosa'
//     try {
//         const usuarios = new delito(datos)
//         usuarios.save()
//     } catch (error) {
//         mensaje = error
//         console.log(error)
//     }

//     //guardar en la base de datos
//     res.json({
//         msg: mensaje
//     })
// }
const postDelito = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const usuarios = new delito(datos)//instaciar el objeto
        await usuarios.save()//guardar la base de datos
        console.log(delito)
    }catch(error){
        mensaje=error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}
// const putDelito = async(req, res) => {
//     const {id, tipoHurto, direccion, fecha, ciudad, descripcion} = req.query // desestructurar
//     let mensaje = 'Actualización exitosa'
//     try {        
//         const delito = await delito.findOneAndUpdate({id:id}, {tipoHurto: tipoHurto, direccion: direccion, fecha: fecha, ciudad: ciudad, descripcion: descripcion})
//     } catch (error) {
//         mensaje = error;
//     }
//     res.json({
//         msg:mensaje
//     })
// }
const putDelito = async(req, res) => {
    const {id, tipoHurto, direccion, fecha, ciudad, descripcion} = req.query //desestructurar
    try{
        const usuario1 = await delito.findOneAndUpdate({id:id}, {tipoHurto: tipoHurto, direccion: direccion, fecha: fecha, ciudad: ciudad, descripcion: descripcion})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
        mensaje = 'actualizacion exitosa'    
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
}
const deleteDelito = async (req, res) => {
    const {id} = req.query
    let mensaje = 'Eliminación exitosa'
    try {
        const delito1 = await delito.findOneAndDelete({id:id})
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg:mensaje
    })
}

module.exports = {
    getDelito,
    postDelito,
    putDelito,
    deleteDelito
}