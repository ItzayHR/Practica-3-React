/* import React, {Component} from "react"; */
import '../COMPONENTS/Listado.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';

const Listado = (props) => 
{
  return ( 
    <div className="Listado">
      <h4>Mi Carrito</h4>
        {
          props.lista.length===0
          ? <p>No hay productos</p>
          :

          <div>
            <div className="Contenedor2">
              <p>Total:${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </p>
              <Button className="Boton" variant="primary" onClick={()=>props.eliminarCarrito()} >Eliminar Carrito</Button>
            </div>
            
          <Table striped bordered hover style={{verticalAlign: 'middle'}}>
          <thead>
          <tr>
              <th>Cantidad</th>
              <th>Código</th>
              <th>Descrpción</th>
              <th>Precio</th>
          </tr>
          </thead>
          <tbody >
          {
            props.lista.map((p,index)=>
              <tr key={index}>
                  <td>{p.cantidad}</td>
                  <td>{p.codigo}</td>
                  <td>{p.descripcion}</td>
                  <td>${(p.cantidad*p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                  <td><Button onClick={()=>props.eliminar(p,index)}variant="danger">Eliminar</Button></td>
                  
              </tr>
            )
          }
          </tbody>
          </Table>
          </div> 
        }
    </div>
 );
}

export default Listado;