<template>
  <div class="box"><img src="../assets/logo_1.png" alt="star" class="width"></div>
  <main>
  <div class="titulo">LISTADO DE RESERVAS DIARIAS</div>
  <div class="separacion">               
            <table border="1">
                <thead>
                    <tr class="fondo_gris_oscuro3">
                        <th>Número de Reserva</th>
                        <th>Nombre y Apellido</th>
                        <th>Fecha de Entrada</th>
                        <th>Fecha de Salida</th>
                        <th>Habitaciones</th>
                        <th>Huéspedes</th>
                        <th>Tipo de Habitación</th>
                    </tr>
                </thead>
                <tbody id="datos_reservas">
                  <tr class="bloque" v-for="unaReserva in listaReservas" :key="unaReserva">
                    <td>{{unaReserva.reserva}}</td>
                    <td>{{unaReserva.nombre}}</td>
                    <td>{{unaReserva.fechaentrada}}</td>
                    <td>{{unaReserva.fechasalida}}</td>                    
                    <td>{{unaReserva.habitacion}}</td>
                    <td>{{unaReserva.huesped}}</td>
                    <td>{{unaReserva.tipohab}}</td>
                  </tr>
                </tbody>
            </table>         
        </div>
          <button @click.prevent="procesarInformacion" type="button" class="boton">PAGINA DE INICIO</button>   
          <footer class="footer">Sabana Plaza Hotel Boutique</footer>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  mounted(){
        document.title="Lista de Reservas";
    },  
  data(){
    return{     
      listaReservas:[
        {
          reserva:"D2021001",
          nombre:"Wilson Acosta",
          fechaentrada:"2021-10-11",
          fechasalida:"2021-10-13",
          habitacion:"1",
          huesped:"1",
          tipohab:"Sencilla"
      },
      {
          reserva:"D2021002",
          nombre:"Francy Alvarez",
          fechaentrada:"2021-10-12",
          fechasalida:"2021-10-14",
          habitacion:"1",
          huesped:"4",
          tipohab:"Múltiple"
      },
      {
          reserva:"D2021003",
          nombre:"Carlos Salcedo",
          fechaentrada:"2021-10-13",
          fechasalida:"2021-10-15",
          habitacion:"1",
          huesped:"2",
          tipohab:"Doble Individual"
      },
      {
          reserva:"D2021004",
          nombre:"Durley Ramirez",
          fechaentrada:"2021-10-14",
          fechasalida:"2021-10-16",
          habitacion:"1",
          huesped:"3",
          tipohab:"Doble Matrimonial"
      },
      ],
          reserva:{},      
    };
  },
  name: 'Home',
  components: {    

  },
  methods:{
    procesarInformacion(){          
    this.$router.push("/");  

    }
  }
}
</script>

<style scoped>

        main{
        background-color: #E2ECE9; 
          
        }  


        table{
            width: 80%;
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
        margin-top: 1%;
        margin-bottom: 10px;
        font-family:Baskerville old face;    
        font-size: 34px;
        color:#46586C;
        font-weight: bold;
        background-color: #E2ECE9;
        }

        .fondo_gris_oscuro3{
        background-color: #46586C;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 15pt;
        text-align: center;
        }

        .separacion{
          margin-top: 8%;
        }

        .boton{
        cursor: pointer;
        padding: 1px;
        margin-top: 10%;
        margin-bottom: 7%;
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
        font-size: 13pt;
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
        }

</style>

