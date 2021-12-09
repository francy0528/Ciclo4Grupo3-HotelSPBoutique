<template>
 <div class="wrapper">
  <div class="box"><img src="../assets/logo_1.png" alt="star" class="width"></div> 
 
 </div> 
 
   
    <header>
        <h1>{{titulo}}</h1> 
           
            <section class="posicion-titulo"> 
               
             <h1>GALERÍA</h1>  
                
            </section> 
            
    </header>   
    
    <!-- <nav> -->
       
            <!-- <a href="reserva.html" class="nav-enlace" <font size = "20" color = "orange"
            face= "Arial Rounded MT">Reserva</font></a>   -->
            
            <!-- <a href="tarifas.html" class="nav-enlace">Tarifa</a>
            <a href="consulta_reserva.html" class="nav-enlace">Consulta tu reserva</a>
            <a href="Galeria.html" class="nav-enlace" >Galeria</a>
            <a href="admin.html" class="nav-enlace">Administración</a> -->
       
    <!-- </nav>  -->

    <main>
        

         <div class="slider">
            <ul>
                <li><img src="../assets/retaurante.jpg" alt=""></li>
                <li><img src="../assets/bar.jpg" alt=""></li>
                <li><img src="../assets/jacuzzi.jpg" alt=""></li>
                <li><img src="../assets/baño.jpg"></li>
                <li><img src="../assets/gym.jpg" alt=""></li>
                <li><img src="../assets/lobby.jpg" alt=""></li>  
            </ul>
        </div>   
    </main>
    
    <footer>Sabana Plaza Hotel Boutique</footer>  

</template>

<script>
// @ is an alias to /src


export default {
    mounted(){
        document.title="Galeria";
    },  
    data(){

    },
  
  name: 'Galeria',
  components: {
  
  }
}
</script>
<style scoped>

    /* template{
    background:blue;
    display: grid;
    grid-template-columns: 100px; 
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 100px 30px 480px 20px;
    height: 100vh;
    row-gap: 5px; 
    

} */
/* header{
    background-color: whitesmoke; 
    background: black;
    display: inline;  
    grid-column: 1 / span 2; 
}  */

header {
  padding: 8px;
  background-color:rgb(226, 236, 233);
       
} 
/* 
nav{
    background-color: #a0a3aa;
    grid-column: 1 / 3; 
    text-align:right
 
    
} */

.posicion-titulo{
    /* position: absolute; */
    display: inline; 
    /* padding:-10%;  */
    /* top: 200px;  */
    text-align:center;
    font-family:Baskerville old ;
    font-size: 25px;
    font-weight: face; 
    color:#46586c;

} 

/* .posicion-titulo2{
    
    padding: 0.625rem 35.625rem;

} */

/* .logo{
    position: absolute;
    top:150;  
    padding: 5px;
} */


.box {
  position: absolute; 
  top: 10px; 
   
  padding: 5px;
  height: 0% ;
  
  width: 120px;
  padding: 40px;
  
}
/* aumenta el tamaño del logo */
.width {
  width: 150%;
}


/* zona de nav donde van los enlaces */
/* nav{
    background-color: #a0a3aa;
    grid-column: 1 / 3; 
    text-align:right
} 
.nav-enlace{
    display:inline-block;
    background: rgb(102, 102, 211);   
    color:#fff ; 
    padding: 0.3125rem 1.875rem;
    text-decoration: none;
    font-family:arial Rounded MT;
    font-size: 16px;
    font-weight: bold; 

    
} */

/*fin*/


 main{
     background-color:#aabce6 ; 
    
     /* grid-column: 1 / 3;   */
    padding: 12px  ;   
    height: 400px;
    margin-top: 0px;
    
  }    
/* 
footer{
    
    background: #a0a3aa;
    color:white;
    grid-column: 1 / 3;  
    text-align:center;
    font-family:arial Rounded MT;
    font-size: 16px;
    font-weight: bold; 
} */

footer{
      
    background-color: #a0a3aa;
    color:white;
    /* grid-column: 1 / 3;    */
    text-align:center;
    font-family:arial Rounded MT;
    font-size: 16px;
    font-weight: bold;
    /* height: 80%;  */
    margin-top: 0%

} 

.slider{
    /* width: 70; */
    /* margin:0%; */
    overflow: hidden; 
}  
.slider ul{
    /* display flex coloca una imagen al lado de la otra */
    display: flex;  
    padding:0;
    width: 600%; /*esta opcion hace que la imagen de turno ocupe toda la pantalalla */
    height: 10%; 
    animation: cambio1 15s infinite alternate;
    margin-top: 0%;
   
}
.slider li{
    width: 100%;
    list-style: none;
}  

/* todas las imagenes del mismo tamaño */
/* oculta las imagenes de slider */
.slider img {
    width: 100%; /* ancho de la imagen al 100%*/
    height: 400px;/*largo de la imagen*/
} 
/* fin */

/* slider */
@keyframes cambio1 {
    0% { margin-left: 0; }
    20% { margin-left: 0; }

    25% { margin-left: -100%; }
    45% { margin-left: -100%; }

    50% { margin-left: -200%; }
    70% { margin-left: -200%; }

    75% { margin-left: -300%; }
    100% { margin-left: -300%; }
}
/* fin */

</style>
