import React from "react";

const List = (props) => {
    const {orders} = props;

    if (!orders || orders.length === 0) {
        return <h3>No hay pedidos activos pendientes</h3>
    }else {
              
            return (        
                <ul>
                    <h3>Pedidos Activos: </h3>            
                    {orders.map((order) => {
                    
                            return (                    
                                <div>
                                    <div key={order.id}>
                                        <span>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Fecha:' : ''} </b> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.order_date : ''} 
                                        </span>
                                        <span>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Estado:' : ''}</b> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.status : ''} 
                                        </span>
                                        <span>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Cliente:' : ''}</b> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.client_id : ''} 
                                        </span>
                                        <span>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Platillo' : ''}</b> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.plate_id : ''} 
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
 