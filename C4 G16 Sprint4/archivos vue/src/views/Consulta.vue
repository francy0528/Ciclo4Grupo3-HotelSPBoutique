<template>
  <div class="about">
    <div class="box"><img src="../assets/logo_1.png" alt="logo" class="width"></div>
  </div>
 
   <header>
       <h1>{{titulo}}</h1> 
      <!-- <font size="12" weight="bold" color="#46586C" face="baskerville old face"> 
          Consulta de Reservas
      </font>  -->

      <section class="posicion-title"> 
               
            <h1>CONSULTA DE RESERVAS</h1>  
               
        </section>
  </header>
  <nav></nav>
  <main>
    
    <div class="form-login">
        <h5>Consulta tu Reserva</h5>
        <input class="controls" type="text" name="confirmacionReserva" v-model="noReserva" placeholder="Número De Confirmacion de Reserva">
        <input class="buttons" @click.prevent = "consultaReserva" type="submit" name="" value="VALIDAR">
        <!-- <button class="buttons" type="submit" @click.prevent = "consultaReserva" >VALIDAR</button> -->
        <!-- <input class="controls" type="text" name="nombres_apellidos" value="" placeholder="Escriba Nombre y Apellido">
            <a href="resumen.html">
                <input class="buttons" type="submit" name="" value="VALIDAR">
            </a> -->
    </div> 
    <div>
        <!-- <form id= "formulario_evento" action="#" method="post"> -->
            <form class="controls1" action="#" method="post">
            <div id="titulo_form">Bienvenido {{reserva.nombre}} </div>
            <div id="titulo_form2">LOS DATOS DE TU RESERVA SON: </div>
            <label id="titulo_form1" for="Reserva">Id Reserva:</label>
            <label for="Reserva_dato">{{reserva.idReserva}}</label>
            <label id="titulo_form1" for="cliente">Nombre del Cliente:</label>
            <label for="cliente_dato">{{reserva.nombre}}</label>
            <label id="titulo_form1" for="fecha_entrada">Fecha de Ingreso:</label>
            <label for="fecha_entrada_dato">{{reserva.fechaEntrada}}</label>
            <label id="titulo_form1" for="fecha_salida">Fecha de Salida:</label>
            <label for="fecha_salida_dato">{{reserva.fechaSalida}}</label>
            <label id="titulo_form1" for="habitacion">Habitación No.:</label>
            <label for="habitacion_dato">{{reserva.habitacion}}</label>
            <label id="titulo_form1" for="huesped">No. Huesped:</label>
            <label for="huesped_dato">{{reserva.huesped}}</label>
            <label id="titulo_form1" for="tipohab">Tipo de Habitación:</label>
            <label for="tipohab_dato">{{reserva.tipoHab}}</label>
            <label id="titulo_form1" for="total">VALOR A CANCELAR:</label>
            <label for="total">${{reserva.total}}</label>
         </form>
    </div>
  </main>    
  <footer>Sabana Plaza Hotel Boutique</footer> 
</template>

<script>
    export default {
            mounted(){
                 document.title="Consulta";
             },  

         data(){
             
            return{
                    listaReservas:[
                        {"idReserva":"D2021001",
                        "nombre":"Wilson Acosta",
                        "fechaEntrada":"2021/10/11",
                        "fechaSalida":"2021/10/13",
                        "habitacion":1,
                        "huesped":1,
                        "tipoHab":"sencilla",
                        "total":300000
                        },
                        
                        {"idReserva":"D2021002",
                        "nombre":"Francy Alvarez",
                        "fechaEntrada":"2021/10/12",
                        "fechaSalida":"2021/10/14",
                        "habitacion":1,
                        "huesped":4,
                        "tipoHab":"Multiple",
                        "total":600000
                        },

                        {"idReserva":"D2021003",
                        "nombre":"Carlos Salcedo",
                        "fechaEntrada":"2021/10/13",
                        "fechaSalida":"2021/10/15",
                        "habitacion":1,
                        "huesped":2,
                        "tipoHab":"Doble",
                        "total":400000
                        },

                        {"idReserva":"D2021004",
                        "nombre":"Durley Ramirez",
                        "fechaEntrada":"2021/10/14",
                        "fechaSalida":"2021/10/16",
                        "habitacion":1,
                        "huesped":3,
                        "tipoHab":"Matrimonial",
                        "total":600000
                        }

                        ],
                        reserva:{
                        idReserva:"",
                        nombre:"",
                        fechaEntrada:"",
                        fechaSalida:"",
                        habitacion:0,
                        huesped:0,
                        tipoHab:"",
                        total:0

                    },
                    noReserva:"",
                    

                    // habitacion:0,
                    // huesped:0,
                    // tipoHab:0,
                    
                    };
                    
                },
    name: 'Home',
    
    

    methods:{
        consultaReserva(){
            
            var op=0;
            for(var i=0; i < this.listaReservas.length; i++){
                if(this.noReserva == this.listaReservas[i].idReserva){
                    // alert(this.noReserva);
                    this.reserva.idReserva = this.listaReservas[i].idReserva;
                    this.reserva.nombre = this.listaReservas[i].nombre;
                    this.reserva.fechaEntrada = this.listaReservas[i].fechaEntrada;
                    this.reserva.fechaSalida = this.listaReservas[i].fechaSalida;
                    this.reserva.habitacion = this.listaReservas[i].habitacion;
                    this.reserva.huesped = this.listaReservas[i].huesped;
                    this.reserva.tipoHab = this.listaReservas[i].tipoHab;
                    this.reserva.total = this.listaReservas[i].total;
                    op=1
                    this.noREserva = this.noReserva;
                    this.Reserva = this.noReserva = '';
                    target.reset();
                    }
            }                    
            if (op==0){
                alert("no existe Reserva")
                this.reserva.idReserva = "";
                this.reserva.nombre = "";
                this.reserva.fechaEntrada = "";
                this.reserva.fechaSalida = "";
                this.reserva.habitacion = 0;
                this.reserva.huesped = 0;
                this.reserva.tipoHab = "";
                this.reserva.total = 0;
            }
                
        }
    }
    }
    
</script>


<style scoped>

    header{   
        background-color:rgb(226, 236, 233); 
        padding-top: 10px;
        /* padding-bottom: 20px;  */ 
        margin-top: 5px;
            
    }


    .logo{
        position: absolute; 
        top: 10px;  
        padding: 5px;
        }
        
.posicion-title{
    display: inline; 
    text-align:center;
    font-family:Baskerville old ;
    font-size: 25px;
    font-weight: face; 
    color:#46586c;

} 


    nav{
        background-image :url(../assets/difuminado1.png); 
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center;
        background-attachment: fixed;
        padding-top: 50px;
        padding-bottom: 180px;
        }

    main{
        background-color:rgb(226, 236, 233); 
        padding-top: 5px;
        padding-bottom: 60px;
        display: grid;
        grid-template-columns: 500px 1fr;
        grid-template-rows: 250px  ;
   }  

    footer{

          background-color: #a0a3aa;
          padding-bottom: 10px;                
          padding-top: 10px;
          color:beige;
        }

    .form-login {
        
        width: 300px;
        height: 240px;
        background: #636161;
        margin: auto;
        margin-top: 15px;
        box-shadow: 7px 15px 37px #000;
        padding: 10px 20px;
        border-top: 1px solid #017bab;
        color: white
    } 

    .form-login h5{
        
        text-align:center;
        height: 40px;
        margin-bottom: 30px;
        border-bottom: 1px solid;
        font-size: 20px;

    } 
    
    .controls{
        width: 100%;
        border: 1px solid #017bab;
        text-align:center;
        margin-bottom: 15px;
        padding: 11px 0px;
        background: white;
        font-size: 14px;
        font-weight:bold; 

        }
    
    .controls1{
        width: 50%;
        border: 1px solid #017bab;
        text-align:left;
        margin-top:30px;
        margin-bottom: 15px;
        margin-left:60px;
        padding: 11px 10px;
        background: white;
        font-size: 14px;
        font-weight:bold; 
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 0.5rem;
        

        }

   .buttons{
        width: 100%;
        height: 40px;        
        background: #017bab;
        border-bottom: 2px rgb(102, 99, 99);
        color:white;
        margin-bottom: 16px;
    }

     .form-login p{
        height: 40px;
        text-align: center;
        border-bottom: 2px solid;
        }  
        
    .form-login a{
        color: white;
        text-decoration: none;
        border-bottom: 1px solid; 
        font-size: 14px;  
        }

    .form-login a:hover{
        text-decoration: underline;
        border-bottom: 1px solid;
        font-size: 14px;
        }

    .box{
      position:absolute;
      top:10px;

      padding: 5px;
      height:0%;

      width:120px;
      padding:40px;
    }

    .width{
          width:150%;
        }
    
    #formulario_evento{
        display: grid;
        grid-template-columns: 250px 200px;
        row-gap: 0.5rem;
        column-gap: 2.5rem;
        text-align: left;
        margin-top: 50px;
        margin-left: 100px;
    }

    #titulo_form{
        grid-column:1 / span 2;
        text-align: center;
        font-weight:bold;
        font-size: 24px;         
        color:#0000ff;
    }

    #titulo_form1{
        text-align: left;
        font-weight:bold;
        color:#121A3E;  
        font-weight:bold;       
    }

    #titulo_form2{
        grid-column:1 / span 2;
        text-align: center;
        font-weight:bold;
        color: #121A3E;  
    }

</style>
