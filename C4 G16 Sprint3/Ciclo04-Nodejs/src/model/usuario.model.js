require('dotenv').config();

const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');

let usuarioSchema = new Schema({
    // id: {type: Object},
    cedula: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    direccion: { type: String },
    telefono: { type: String }
});

usuarioSchema.pre('save', function(next){
    if(this.isModified('password') || this.isNew){
        const document = this;

        bcrypt.hash(document.password, 10, (err, hash) => {
            if(err){
                next(err);
            }else{
                document.password = hash;
                next();
            }
        })
    }else{
        next();
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;