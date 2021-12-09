import axios from "axios";

class UsuarioService {
    url="http://localhost:8000/usuario";
    login = [];
    loginActual={};

    constructor() {

        this.loginActual = {
             documento: "",
            nombre: "",
            password:"",
            usuario:""
            
        };

        this.login = [
            {
                
                documento: "741963852",
                nombre: "Jose",
                password:"0003",
                usuario:"lucho"
                
            }
            
               
            
        ];
    }

        obtenerTodos() {
            return this.login;
        }  

    obtenerPorCliente(){
        let id= localStorage.usuario;
        return axios.get(`${this.url}/${id}`);

    }

    obtenerloginActual(){
        return this.loginActual;
    }

    registrar(login){
        return axios.post(`${this.url}`,login);
    }


} export default new UsuarioService();