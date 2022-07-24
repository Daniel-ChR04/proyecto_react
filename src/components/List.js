import React from "react";

const List = (props) => {
    const {users} = props;

    if (!users || users.length === 0) return <h1>No hay clientes</h1>

    return (
        <ul>
            <h2>Clientes disponibles</h2>
            {users.map((user) => {
                return (
                    <div>
                        <li key={user.id}>
                            <span><b>Nombre:</b> {user.name} </span>                            
                        </li>
                    </div>
                );
            })}
        </ul>
    );
};
export default List;