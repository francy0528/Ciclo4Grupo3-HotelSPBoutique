<template>
<div>
            <h2>Registrar Evento</h2>
            <form id="formulario_evento" action="#" method="post">
                <label for="cliente">Cliente:</label>
                <input type="text" name="cliente">
                <label for="documento">Documento:</label>
                <input type="text" name="documento">
                <label for="salon">Salón</label>
                <div>
                    <input type="radio" name="salon" value="1"> Normal
                    <input type="radio" name="salon" value="2"> Grande
                </div>
                <input type="checkbox" name="meseros_extra" value="Si">
                <label for="meseros_extra">Agregar meseros extra?</label>
                <label for="cantidad">Cantidad meseros</label>
                <input type="number" name="cantidad">
                <input type="checkbox" name="servicio_comida" value="Si">
                <label for="servicio_comida">Incluir comida?</label>
                <label for="platos">Cantidad platos</label>
                <input type="number" name="platos">
                <button type="reset" name="limpiar">Limpiar</button>
                <button onclick="procesarInformacion()" type="button">Agregar Evento</button>
            </form>
        </div>

        <ul>
            <li v-for="unSalon in listaSalones" :key="unSalon.id">
            {{unSalon.nombre}}
            </li>
        </ul>
</template>

<script>
import SalonService from "@/services/salones"

export default {
    mounted(){
        document.title="Acerca de"
        SalonService.obtenerTodos().then(
            (respuesta) => {
                console.log(respuesta.data);
                this.listaSalones=respuesta.data;
        }
        ).catch(
            (error)=>{

            }
        
        );
    },

    data(){
        return{
            listaSalones:[]
        };
    }
}
</script>
