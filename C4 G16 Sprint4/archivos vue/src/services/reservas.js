import axios from "axios";

class ReservaService {
    url="http://localhost:8000/reserva";
    reservas = [];
    reservaActual={};

    // constructor() {

        // this.reservaActual = {
        //     usuario:"",
        //     fechaEntrada:"",
        //     fechaSalida:"",
        //     huesped:0,
        //     servicio:{},
        //     total: 0
        // };

        // this.reservas = [
        //     {
        //         reserva:"D2021001",
        //         nombre:"Wilson Acosta",
        //         fechaentrada:"2021-10-11",
        //         fechasalida:"2021-10-13",
        //         habitacion:"1",
        //         huesped:"1",
        //         tipohab:"Sencilla"
        //     },
        //     {
        //         reserva:"D2021002",
        //         nombre:"Francy Alvarez",
        //         fechaentrada:"2021-10-12",
        //         fechasalida:"2021-10-14",
        //         habitacion:"1",
        //         huesped:"4",
        //         tipohab:"Múltiple"
        //     }
        // ];
    // }

    obtenerTodos() {
        return this.reserva;
    }

    obtenerPorCliente(){
        let id = localStorage.usuario;
        return axios.get(`${this.url}/usuario/${id}`);
        }

    obtenerReservaActual(){
        return this.reservaActual;
    }

    registrar(reserva){
        return axios.post(`${this.url}`,reserva);
    }


} export default new ReservaService();

