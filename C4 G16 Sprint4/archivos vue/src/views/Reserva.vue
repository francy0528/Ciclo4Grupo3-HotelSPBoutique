<template>
<div class="box"><img src="../assets/logo_1.png" alt="star" class="width"></div>
<!-- <div class="titulo">RESERVA</div>  -->
  

  <header>
        <!-- <h1>{{titulo}}</h1>  -->
        <div class="titulo">RESERVA</div> 
        <div class="centrar"><img src="../assets/imagen_recepcion1.png" alt="Recepción Hotel"/></div>
        <h2 class="fondo_gris_oscuro1">Características del Hotel</h2>
        <h3 class="fondo_gris_oscuro2">Nuestro hotel en Bogotá le ofrece servicios de restaurant, lobby bar,
          spa con sauna y masajes, servicio de habitaciones, gimnasio, parqueadero,
          traslados al aeropuerto y wifi gratuito.</h3>
  </header>

    <main>

        
        <div>
          <form id="formulario_reservas" action="#" method="post">            
      
            <label class="label" for="fechaent">Fecha de Entrada:</label>
            <input class="fondo_amarillo" type="date" name="fechaEntrada" v-model="fechaEntrada">             
      
            <label class="label" for="fechasal">Fecha de Salida:</label>
            <input class="fondo_amarillo" type="date" name="fechaSalida" v-model="fechaSalida">             
    
            <label class="label" for="huesped">Huéspedes:</label>
            <input class="fondo_amarillo" type="number" name="huesped" v-model="huesped">
                  
            
            <label class="label" for="tipohab">Tipo de Habitación:</label> 
              <select class="fondo_amarillo" name="tipohab" v-model="servicio">
                <option v-for="unServicio, i in listaServicios" :key="unServicio.id" :value="i">
                  {{unServicio.tipoHabitacion}}
                </option>
              </select> 
              
          </form>                    
        </div>  
        
        <div>
            <button @click.prevent="procesarInformacion" type="button" class="boton">RESERVA AQUI</button>
        </div> 

        <div class="separacion">
          <h2>RESUMEN DE SU RESERVA</h2>           
          <h2>Cliente: - {{usuario.nombre}} </h2>           
          <table border="1">
              <thead>
                  <tr class="fondo_gris_oscuro3">
                      <th>Fecha de Entrada</th>
                      <th>Fecha de Salida</th>
                      <th>Huéspedes</th>
                      <th>Tipo de Habitación</th>
                      <th>Valor total</th>
                  </tr>
              </thead>
              <tbody id="datos_reservas">
                <tr class="bloque" v-for="unaReserva, i in listaReservas" :key="unaReserva">                    
                  <td>{{unaReserva.fechaEntrada}}</td>
                  <td>{{unaReserva.fechaSalida}}</td> 
                  <td>{{unaReserva.huesped}}</td>
                  <td>{{unaReserva.servicio.tipoHabitacion}}</td>
                  <td>{{unaReserva.total}}</td>
                  <!-- <td><button @click.prevent="eliminar(i)">Eliminar</button></td> -->
                </tr>
              </tbody>
          </table>
        </div>

      
      
    </main>
    <footer class="footer">Sabana Plaza Hotel Boutique</footer>
</template>

<script>
// @ is an alias to /src
import ReservaService from "@/services/reservas.js"
import UsuarioService from "@/services/clientes.js"
import ServicioService from "@/services/servicios.js"


export default {  
    mounted(){

      ReservaService.obtenerPorCliente().then((respuesta)=>{
            this.listaReservas=respuesta.data;
        }); 

      UsuarioService.obtener().then((respuesta)=>{
            this.usuario=respuesta.data;
        });
      
      ServicioService.obtenerTodos().then((respuesta)=>{
            this.listaServicios=respuesta.data;
        });
        
        // document.title="Reserva";
           
             
    },  
  data(){
    return{      
      listaReservas:[], 
      listaServicios:[], 
      reserva:{},
      fechaEntrada:"",
      fechaSalida:"",
      huesped:0,
      tipoHabitacion:"",
      servicio:0,
      usuario:{}
      
    };
  },
  name: 'Reserva',
  components: {
  },
  methods:{
    // eliminar(posicion){
    //     this.listaReservas.splice(posicion, 1);
    // },
    // limpiarFormulario(){
    //     this.reserva = {          
    //       nombre:"",
    //       fechaentrada:"",
    //       fechasalida:"",
    //       habitacion:{},
    //       huesped:{},
    //       tipohab:{}
    //   }
    // },
    procesarInformacion(){ 
        this.reserva.servicio = this.listaServicios[this.servicio];
        this.reserva.usuario = this.usuario;
        this.reserva.fechaEntrada = this.fechaEntrada;
        this.reserva.fechaSalida = this.fechaSalida;
        this.reserva.huesped = this.huesped;

        this.reserva.total = (this.listaServicios[this.servicio].precio)*(this.huesped);

        // alert(this.reserva);
        ReservaService.registrar(this.reserva).then((respuesta)=>{
        // alert("Reservación realizada");
        this.listaReservas.push(this.reserva);
        // this.limpiarFormulario();
        });
            
    }
  }
}
</script>

<style scoped>
        header{
          background-color: #E2ECE9; 
          
         
        }
        main{
          background-color: #E2ECE9; 
          
        }  
        #formulario_reservas{
            display: grid;
            grid-template-columns: 5fr 5fr;
            margin-right: 35%;
            margin-left: 30%;
        }
        body{
            padding: 2rem;
        }
        table{
            width: 75%;
            margin: 0 auto;
        }
        .box{
          position: absolute;
          top: 10px;
          padding: 5px;
          height: 0%;
          width: 120px;
          padding: 40px;
        }
        .width{
          width: 150%;
        }
        .titulo{
        display: inline; 
        margin-left: 0%;
        margin-top: 20px;
        font-family:Baskerville old face;    
        font-size: 34px;
        color:#46586C;
        font-weight: bold;
        }
        .centrar{
        margin: auto;
        margin-top: 4%;  
        }
        h2{
            font-size: 20px;
            font-family: arial rounded MT;
            font-weight: bold;
        }
        .h3{
          margin-left: 20px;
        }
        .fondo_gris_oscuro1{
        background-color: #46586C;
        margin-top: 0.5%;
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 0%;
        padding: 0.5%;
        text-align: center;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 16pt;
        }
        .label{
        color: #121A3E;
        font-family: arial rounded MT;
        font-size: 13pt;  
        }
        .fondo_gris_oscuro2{
        background-color: #46586C;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 0%;
        margin-bottom: 1%;
        padding-left: 1%;
        padding-right: 1%;
        padding-bottom: 1%;
        text-align: center;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 12pt;
        }
        .fondo_gris_oscuro3{
        background-color: #46586C;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 14pt;
        text-align: center;
        }
        .separacion{
          margin-top: 2%;
          margin-left: 0%;
        }
        .fondo_amarillo{
        background-color:#EFD979;
        color: #121A3E;
        font-family: arial rounded MT;
        font-size: 12pt;   
        margin-bottom: 2.5%;
        display: inline-block; 
        }
        .boton{
        cursor: pointer;
        padding: 1px;
        margin-top: 3%;
        margin-bottom: 5%;
        display: inline-block;
        background-color: #46586C;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 16pt;
        text-decoration: none;
        width: 220px;
        text-align: center;
        }
        .bloque{
        color:#121A3E;
        font-family: arial rounded MT;
        font-size: 12pt;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        background-color: #EFD979;
        }
        .footer{
        background-color: #63758B;
        color:white; 
        font-family:arial Rounded MT;
        font-size: 16px;
        font-weight: bold; 
        text-align: center;
        margin-left: 0%;
        margin-top: 3%;
        }
</style>