const isAutenticado = (origen, destino, accion)=>{
    if(localStorage.usuario){
        accion();
    }else{
        accion({name:"Login"});
    }

}
export default isAutenticado;