/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.repositorios;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Servicio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Francy Alvarez
 */

@Repository
public interface ServicioRepository extends CrudRepository<Servicio, Long>{
    
}