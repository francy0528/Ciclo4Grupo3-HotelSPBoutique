
  <!-- <header> 
        <h1> {{titulo}}</h1>
    </header>
    <main>
               
        <div>
            <h2>Listado de Eventos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>SALON</th>
                        <th>MESEROS</th>
                        <th>PLATOS</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody id="datos_eventos">
                    <tr v-for="unEvento in listaEventos" :key="unEvento">
                      <td>{{unEvento.cliente}}</td>
                      <td>{{unEvento.salon.nombre}}</td>
                      <td>{{unEvento.meseros}}</td>
                      <td>{{unEvento.platos}}</td>
                      <td>{{unEvento.total}}</td>
                    </tr>
                </tbody>
            </table>
        </div>        
    </main>
    <footer>
        <router-link :to="{name:'Eventos'}">Ir a eventos</router-link>
    </footer> -->


<script>
// @ is an alias to /src
// import EventoService from "@/services/eventos.js";

// export default {
//     mounted(){
//         this.listaEventos = EventoService.obtenerTodos();
//         console.log(this.listaEventos);
//     },
//     title:"prueba",
//   data(){
//     return {
//       titulo:"Gestión de eventos",
//       listaEventos:[],
//       evento:{
//           cliente:"",
//           documento:"",
//           salon:{},
//           meseros:0,
//           platos:0,
//           total:0
//       },
//       salon:0,
//       extra:false,
//       comida:false,


//     };
//   },
//   name: 'Home',
//   components: {
    
//   }
// }
</script>

<style scoped>
/* body{
            padding: 2rem;
        }
        #formulario_evento{
            display: grid;
            grid-template-columns: 5rem 10rem;
            row-gap: 1rem;
            column-gap: 0.5rem;
        }

        main{
            display: grid;
            grid-template-columns: 1fr 3fr;
        }

        table{
            width: 80%;
            margin: 0 auto;
        }

        table td{
            text-align: center;
        } */
</style>
