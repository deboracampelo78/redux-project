import React from "react";
import Fruta from './Fruta';
import AdicionaFruta from "./AdicionaFruta";
import { useSelector } from "react-redux";

const ListaFrutas = () => {

    const frutas = useSelector(state => state.frutaReducers.frutas);
   
    return (
        <>
            <AdicionaFruta />
            <h1>Lista de Frutas</h1>
            {frutas.map(fruta => (
                <Fruta Key={fruta.id} fruta={fruta} />
            ))}
        </>
    )
}

export default ListaFrutas