import React from "react";
import { ColorCode } from '../components/ColorCode';

const List = (props) => {
    const {orders} = props;

    if (!orders || orders.length === 0) {
        return <h3 style ={{margin: "10px 30px"}}>No hay pedidos activos pendientes</h3>
    }else {
              
            return (        
                <ul>
                    <h3>Pedidos Activos: </h3>            
                    {orders.map((order) => {
                    
                            return (                    
                                <div>
                                    <div key={order.id}>
                                        <span>
                                            <a>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Estado: ' : <a></a>} </a> 
                                            <ColorCode 
                                            param={order.status} 
                                            txt = {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.status :  <a></a>}  
                                            />                                            
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <a>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Fecha: ' :  <a></a>}</a>
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.order_date : <a></a>} 
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <a>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Cliente: ' :  <a></a>}</a> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.client_id :  <a></a>} 
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <a>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Platillo: ' :  <a></a>}</a> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.plate_id :  <a></a>} 
                                        </span>
                                    </div>
                                </div>                    
                            );
                        
                    })}
                </ul>
            );
        
    }    
};
export default List;
 