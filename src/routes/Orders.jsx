import React from 'react'
import WithLoadingList from '../components/WithLoadingList';
import List from '../components/List';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFetch } from '../components/FetchMethods'  


export default function Orders() {
    const LoadingList = WithLoadingList(List);
    const [appStateLoading, setAppStateLoading] = useState(false);
    const [refresh,setRefresh] = useState(true);
    const [appStateObject, setAppStateObject] = useState(null);

    useEffect(() => {
      if (refresh){
        setAppStateLoading(true);
        getFetch("orders").then(val => setAppStateObject(val));
        setAppStateLoading(false);
        setRefresh(false);
      }
      
    }, [setAppStateObject, setAppStateLoading,refresh])


    
  return (
    <div>
        <h1 className="Header">Lista de pedidos activos pendientes</h1><br/>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
        <Link to = { '/login'} style ={{margin: "30px"}} className="btn btn-outline-info my-2 my-sm-0"> Volver
        </Link>
    </div>
  )

}
