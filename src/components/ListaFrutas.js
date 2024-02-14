import React from "react";
import Fruta from './Fruta';
import AdicionaFruta from "./AdicionaFruta";

const ListaFrutas = () => {

    const frutas = [
        { id: 1, nome: 'Banana', quantidade: 3 },
        { id: 2, nome: 'Maçã', quantidade: 9 },
        { id: 3, nome: 'Uva', quantidade: 12 },
    ]
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