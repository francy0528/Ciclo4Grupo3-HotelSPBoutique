<template>
 <div class="wrapper">
  <div class="box"><img src="../assets/logo_1.png" alt="star" class="width"></div> 
 
 </div> 

    <header>
      <h1>{{titulo}}</h1> 
        
        <section class="posicion-title"> 
               
            <h1>CÓDIGO RESERVA</h1>  
            
        </section>    
             
    </header> 

    <main>

           <div class="form-login">
        <h5>Código Reserva</h5>
        <input class="controls" type="text" name="confirmacionReserva" v-model="noDocumento" placeholder="Nº Documento">
        <input class="buttons" @click.prevent = "consultaReserva" type="submit" name="" value="Confirmar">
        <section class="Numero_reserva">
        <!-- <label id="titulo_form1" for="Reserva">aId Reserv:</label> -->
        
        <label for="Reserva_dato">{{reserva.Reserva}}</label>
        </section>
        
        <input class="buttons" @click.prevent = "limpiarFormulario" type="submit" name="" value="Limpiar">
        
    </div> 

     <div>
       <!-- <form class="controls1" action="#" method="post">
            
            <label id="titulo_form1" for="Reserva">Id Reserva:</label>
            <label for="Reserva_dato">{{reserva.idReserva}}</label>
            
         </form> -->
   
   

    </div>




      </main>
    
   <!-- <footer>Sabana Plaza Hotel Boutique</footer>     -->

</template>


<script>
    export default {
      mounted(){
        document.title="Código Reserva";
    },  
         data(){
             
            return{
                    listaReservas:[
                        
                        {"idDocumento":"01234",
                        "Reserva":"D2021001",
                        
                        },
                        
                       
                        {"idDocumento":"05678",
                         "Reserva":"D2021002",
                        
                        },

                      
                        {"idDocumento":"091011",
                        "Reserva":"D2021003",
                        
                        },

                        
                        {"idDocumento":"0121314",
                        "Reserva":"D2021004",
                        
                        }

                        ],
                        reserva:{
                        idDocumento:"",
                        Reserva:"",
                        

                    },
                    noDocumento:"",
                    

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
                if(this.noDocumento == this.listaReservas[i].idDocumento){
                    // alert(this.noReserva);
                    this.reserva.Reserva = this.listaReservas[i].Reserva;
                    op=1
                    }
            }                    
            if (op==0){
                alert("no existe Reserva")
                this.reserva.Reserva = "";
                
            }
                
        },
        limpiarFormulario(){
          this.reserva = {
            Reserva:"",
          }
          this.noDocumento = this.noDocumento;
          this.Reserva = this.noDocumento = '';
          target.reset();
        }
  


    }
    }
    




</script>
<style scoped>

.Numero_reserva{
    display: inline; 
    text-align:center;
    font-family:Baskerville old ;
    font-size: 50px;
    font-weight: face; 
    color:white;

}

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





