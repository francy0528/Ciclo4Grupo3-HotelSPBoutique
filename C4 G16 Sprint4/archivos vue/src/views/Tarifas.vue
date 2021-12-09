<template>

  <div class="home">
     <div class="box"><img src="../assets/logo_1.png" alt="logo" class="width"></div>
  </div>
        <header>
            <h1>{{titulo}}</h1> 
            <!-- <font size="12" weight="bold" color="#46586C" face="baskerville old face">
                TARIFAS
            </font> -->
             <section class="posicion-title"> 
               
            <h1>TARIFAS</h1>  
               
        </section>


        </header>
        
        <nav></nav>
        
        <main>
          <div>
            <img src="../assets/HSencilla.png" alt="logo" class="habitacion">
          </div>

          <div>
            <table>
                <thead> 
                    <tr>
                        <th><font size="5" color= "#A0A3AA" face="Arial Rounded MT bold">HABITACION SENCILLA</font></th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>
                            <p class=modelo_texto>
                                Las habitaciones sencillas de Sabana Plaza Hotel Boutique estan diseñadas para acoger a 1 huésped.
                                De estilo urbano y muy funcionales, son habitaciones ideales para una escapada cultural o de 
                                compras en Bogotá.
                                
                            </p>
                            <p class=modelo_texto>
                                PRECIO $300.000
                            </p>
                            <button type="button"> Ver Disponibilidad
            <!--                    <a href="#" target="_blank">Mas Detalles</a>-->
                            </button>
                        </td> 
                    </tr>
                </tbody> 
                
            </table>

          </div>

          <div>
            <img src="../assets/HDoble.png" alt="logo" class="habitacion">
          </div>
          <div>
            <table>
                <thead> 
                    <tr>
                        <th><font size="5" color= "#A0A3AA" face="Arial Rounded MT bold">HABITACION DOBLE</font></th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>
                            <p class=modelo_texto>
                                Las habitaciones dobles de Sabana Plaza Hotel Boutique brindan la ventaja de disfrutar de un espacio ideal para compartir cómodamente 
                                durante un viaje de negocios o una visita a Bogotá, ofrecen 2 camas gemelas, wifi gratis, mesita auxiliar para 2 y artículos de aseo.
                                
                            </p>
                            <p class=modelo_texto>
                                PRECIO $200.000
                            </p>
                            <button type="button"> Ver Disponibilidad
            <!--                    <a href="#" target="_blank">Mas Detalles</a>-->
                            </button>
                        </td> 
                    </tr>
                </tbody>    
            </table>
          </div>

          <div>
            <img src="../assets/HMatrimonial.png" alt="logo" class="habitacion">
          </div>

          <div>
            <table>
                <thead> 
                    <tr>
                        <th><font size="5" color= "#A0A3AA" face="Arial Rounded MT bold">HABITACION MATRIMONIAL</font></th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>
                            <p class=modelo_texto>
                                Las habitaciones matrimoniales de Sabana Plaza Hotel Boutique brindan la ventaja de disfrutar de un espacio ideal para compartir
                                en pareja, ofrecen 1 camas dobles, wifi gratis, menú de almohadas, reloj despertador, cargador para iPhone.
                                
                            </p>
                            <p class=modelo_texto>
                                PRECIO $200.000
                            </p>
                            <button type="button"> Ver Disponibilidad
            <!--                    <a href="#" target="_blank">Mas Detalles</a>-->
                            </button>
                        </td> 
                    </tr>
                </tbody>    
            </table>
          </div>

          <div>
            <img src="../assets/HMultiple.png" alt="logo" class="habitacion">
          </div>

          <div>
            <table>
                <thead> 
                    <tr>
                        <th><font size="5" color= "#A0A3AA" face="Arial Rounded MT bold">HABITACION MULTIPLE</font></th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>
                            <p class=modelo_texto>
                                Las habitaciones múltiples de Sabana Plaza Hotel Boutique son habitaciones familiares para entre 1 y 4 personas. 
                                Todas cuentan con 2 camas King y semidoble, baño privado y secadora de cabello, Crean un confortable ambiente para 
                                que su familia se sienta como en casa.
                            </p>
                            <p class=modelo_texto>
                                PRECIO $150.000
                            </p>
                            <button type="button"> Ver Disponibilidad
            <!--                    <a href="#" target="_blank">Mas Detalles</a>-->
                            </button>
                        </td> 
                    </tr>
                </tbody>    
            </table>
          </div>

        </main>
        <footer>
            Sabana Plaza Hotel Boutique
        </footer>
</template>

<script>
    export default {

        mounted(){
        document.title="Tarifas";
    },  
    data(){

    },

    name: 'Home',
  }
</script>

<style scoped>

      /* header{   
        background-color:rgb(226, 236, 233); 
        padding-top: 10px;
        /* padding-bottom: 20px;  */ 
        /* margin-top: 5px; */
            
    /* }  */

    .posicion-title{
        display: inline; 
        text-align:center;
        font-family:Baskerville old ;
        font-size: 25px;
        font-weight: face; 
        color:#46586c;

    } 
      body{
            padding: 2rem;
          }

      header{
            grid-column:1 / span 1;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 20px;
            background-color: rgb(226,236,233) ;
            }

      main{
            grid-column:1/ span2;
            padding-left: 200px;
            display:inline;
            display: grid;
            grid-template-columns: 450px 350px;
            grid-template-rows: 250px 250px 250px 250px;
            padding-top: 20px;
            padding-right:30px;
            padding-bottom: 30px;
            row-gap: 1rem;
            column-gap: 4rem;
            background-color: rgb(226,236,233) ;
          }

      .modelo_texto{
            text-align: justify;
            font-family:Arial, Helvetica, sans-serif;
            font-size:16px;
            }

      nav {
            grid-column:1 / span 2;
            background-image:url("../assets/recepcion.jpeg");
            background-repeat: no-repeat;
            display: flex;
            background-attachment: fixed;
            background-size: 100% 100%;
            text-align:left;
            padding-top: 230px;
            padding-right: 0px;
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

        .habitacion {
                      width:70%;
                      text-align: left;
                    }
        footer{
                grid-column:1/2;
                background-color: #a0a3aa;
                padding-bottom: 10px;                
                padding-top: 10px;
                color:beige;
             }
</style>
