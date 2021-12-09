<template>
 
<div class="wrapper">
  <div class="box"><img src="../assets/logo_1.png" alt="star" class="width"></div> 
 
 </div> 
    <header>
        <h1>{{titulo}}</h1> 
        
        <section class="posicion-title"> 
               
            <h1>INICIO DE SESIÓN</h1>  
               
        </section>    
             
    </header> 
    <!-- <nav> -->
       
        <!-- <a href="reserva.html" class="nav-enlace" <font size = "20" color = "orange"
        face= "Arial Rounded MT">Reserva</font></a> -->
      
       <!--  <a href="tarifas.html" class="nav-enlace">Tarifa</a>
        <a href="consulta_reserva.html" class="nav-enlace">Consulta tu reserva</a>
        <a href="Galeria.html" class="nav-enlace" >Galeria</a>
        <a href="admin.html" class="nav-enlace">Administración</a>  -->
   
    <!-- </nav> -->
    

    <main>

    <div class="conten">  </div>       
            
       
         
        <section class="form-login">

            <h5>Inicio de Sesión</h5>  
            <input class="controls" type="text" placeholder="Escriba nombre de usuario" v-model="username">
            <input class="controls" type="password" placeholder="Escriba su contraseña" v-model="clave"> 
            <input class="buttons" @click.prevent="validarInformacion" type="submit" name="" value="VALIDAR"> 
            
                
        </section>  
     
    </main>   

   <footer>Sabana Plaza Hotel Boutique</footer>    

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
 mounted(){
        document.title="Administración";
    },  


    // espacio para mounted
    data(){

        
       
     
return{

   listausuarios:[['wilson'],['123'],
        ['charly'],['456']],

 username: '',
    clave: '',
    
    submitted: {
      username: '',
      clave: ''
    }
 



};
  



},



// username:"",
// clave:"",
   


  name: 'Administración',
  components: {
    
  },

 

  
   
  
  methods:{
     validarInformacion(){
         var op = 0

        for (var i = 0; i < this.listausuarios.length; i++){
            
            if (this.username == this.listausuarios[i] && this.clave == this.listausuarios[i+1]){
                
                alert("datos validos")
                // window.location.href = 'listadoreservas'
                this.$router.push("/listadoreservas");
                op = 1
                
            }
        }
        
        if (op == 0){
            
            alert("El Nombre de Usuario o la contraseña no coinciden")
            // borrar datos del login 
                this.submitted.username = this.username;
                this.submitted.clave = this.clave;
                this.username = this.clave = '';
                target.reset();
             // fin borrar datos           
          
           
        }
    },

     
    // formSubmit: function(event) {
    //   this.submitted.username = this.username;
    //   this.submitted.clave = this.clave;
      
    //   this.username = this.clave = '';
      
    //   event.target.reset();
    // }
  
       
            
  }
   
        

            
    }  
  


</script>
<style scoped>


/* .home{
    position: absolute; 
    top: 10px;  
    padding: 5px;
    height: 0% ;
    width: 20%;
} */
/* 
header{   
    background-color:rgb(226, 236, 233); 
    display: inline;  
    grid-column: 1 / span 2; 

} */
/* disminuye de tamaño el logo */
/*  template{
    background-color: black;  
    display: grid;
    grid-template-columns: 100px;     
    grid-template-rows: 50px 30px 450px 25px; 
    
    row-gap: 5px;    

}  */

/* Este modifica el header */
 header {
  padding: 8px;
  background-color:rgb(226, 236, 233);
       
} 

nav{
    background-color: #a0a3aa;
    grid-column: 1 / 3; 
    text-align:right
 
    
}
/* .nav-enlace{
    display:inline-block;
    background: rgb(102, 102, 211);   
    color:#fff ; 
    padding: 5px 30px;
    text-decoration: none;
    font-family:arial Rounded MT;
    font-size: 16px;
    font-weight: bold; 
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
 
main{
    
   /*  background-color:rgb(247, 237, 237); */ 
    /* grid-column: 1 / 3;  */  
    background-image : url(../assets/difuminado1.png);  
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    background-attachment: fixed;  
    padding: 30px;
}  



.posicion-title{
    display: inline; 
    text-align:center;
    font-family:Baskerville old ;
    font-size: 25px;
    font-weight: face; 
    color:#46586c;

} 

footer{
      
    background-color: #a0a3aa;
    color:white;
    grid-column: 1 / 3;  
    text-align:center;
    font-family:arial Rounded MT;
    font-size: 16px;
    font-weight: bold;
    height: 100%; 
    margin-top: 0;

} 


 .form-login {
width: 300px;
height: 340px;
background: #636161;
margin: auto;
margin-top: 10px;
box-shadow: 7px 15px 37px #000;
padding: 20px 30px;
border-top: 1px solid #017bab;
color: white;
border-radius:30px;

}  


 
.form-login h5{
    
    text-align: center;
    height: 40px;
    margin-bottom: 30px;
    border-bottom: 2px solid;
    font-size: 20px;
    
    

}  

 

.controls{
    width: 90%;
    border: 1px solid #017bab; 
    margin-left: 50%;
    transform: translateX(-50%); 
    margin-bottom: 15px;
    padding: 11px 0px;
    background: white;
    
    font-weight:bold; 
    font-family: "Font Awesome\ 5 Free";
    /* position: absolute; */
    left: 28px;
    font-size: 15px;
    padding-top:4px; 
    content: "\f007";
    border-radius:10px;
    }

.controls#user-group::before{
        content: "\f007";
    } 

 
   .buttons{ 
        padding: 10px 40px;
        width: 50%;
        height: 40px; 
         
        margin-left: 50%;
        transform: translateX(-50%);  
                   
        border: 2px solid white;       
        background: #017bab;
        font-size: 15px;
        font-weight: 600;
        /* border-bottom: 2px rgb(8, 8, 8); */ 
        color:white;  
        margin-bottom: 16px; 
        outline: none;
        cursor: pointer;
        transition: all 500ms; 
        border-radius:10px;
     } 

   
    .buttons:hover{
    background:rgb(173, 171, 171);
    color:blue;

    }

     
     .form-login p{
        height: 1px;
        text-align: center;
        /* border-bottom: 2px solid; */
        }  
/* 
 .form-login a{
        color: white;
        text-decoration: none;
        border-bottom: 1px solid; 
        font-size: 14px;
        padding:1px;
        } */


    .form-login a:hover{
        text-decoration: underline;
        border-bottom: 1px solid;
        font-size: 14px;
        }

 /*            
@media screen and (max-width:850px){
    main{
        margin-top: 50px;         
    }
       
    body{
        margin-top: 10px;
          
    }     */



 
</style>





