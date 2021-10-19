import '../COMPONENTS/Productos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';

const Productos = (props) => 
{
    return(
        <div className = "Productos">
            <h4>Productos</h4>
            <Table striped bordered hover style={{verticalAlign: 'middle'}}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.ProductosLista.map((p,index)=>
                            <tr key={index}>
                                <td>{p.codigo}</td>
                                <td>{p.descripcion}</td>
                                <td><img src = {p.url} alt="Imagen del Producto"></img></td>
                                <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                <td><Button variant="success" onClick={()=>(props.agregar(p))}>Agregar</Button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
    )
}

export default Productos;