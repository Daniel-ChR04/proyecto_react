import React from "react";

function WithLoadingList(Component) {
    return function WithLoadingList({isLoading, ...props}){
        if (!isLoading) return <Component {...props} />

        return (
            <p>Espere, cargando la información</p>
        )
    }

}
export default WithLoadingList;