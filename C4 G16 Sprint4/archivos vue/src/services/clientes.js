import axios from "axios";

class UsuarioService{
    url="http://localhost:8000/usuario";

    validar(miUsuario, miPassword){
        
        let datos={usuario:miUsuario, password:miPassword};

        return axios.post(`${this.url}/validar`, datos);
        
    }

    obtener(){
        let id = localStorage.usuario;
        return axios.get(`${this.url}/${id}`);
    }

    }
    export default new UsuarioService();
