const mongoose = require('mongoose');
const {Schema} = require('mongoose');
// const User = require('./usuario.model');
const Habitacion = require('./habitacion.model');


let reservaSchema = new Schema({
    // id: {type: Object},
    // iduser: {type: String, required: true},
    fecha_entrada: { type: String, required: true },
    fecha_salida: { type: String, required: true },
    products: [{num_hab: String, tipo_hab: String, precio: Number, disponible: Boolean}],
    
    
    
});

reservaSchema.pre('save', async function(next){
    // if(this.isModified('products') || this.isNew){
        const document = this;
        // const idUser = document.iduser;
        const products = document.products;
        const fecha_entrada = document.fecha_entrada;
        const fecha_salida = document.fecha_salida;

        // document.total = 0;

        // let user;
        let promises = [];


        // try{
        //     user = await User.findById(idUser);
        // }catch(ex){
        //     next(new Error(`The user with ID '${idUser}' does not exist`));
        //     //next(ex);
        // }

        try{
            if(products.length == 0){
                //products list is empty
                next();
            }else{
                for(item of products){
                    promises.push(Product.findById(item.num_hab));
                }

    
                
                  
                const resultPromises = await Promise.all(promises);
    
                console.log('res promises',resultPromises);
       
        
    
                resultPromises.forEach( (fecha_entrada, fecha_salida, product, index ) => {
                    document.fecha_entrada[index].fecha_entrada = fecha_entrada;
                    document.fecha_salida[index].fecha_salida = fecha_salida;
                    
                    document.products[index].tipo_hab = product.tipo_hab;
                    document.products[index].precio = product.precio;
                    document.products[index].disponible = product.disponible;
                });
            }
            
        }catch(ex){
            next();
        }

        
    // }else{
    //     next();
    // }
});


const Reserva = mongoose.model('Reserva', reservaSchema);


module.exports = Reserva;