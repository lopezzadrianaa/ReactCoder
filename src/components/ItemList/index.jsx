import React from 'react'
import { Item } from '../Item'

export const ItemList = ({productos}) => {
    return (
        <>
            {productos.map(producto  => {
              return <Item producto={producto} key={producto.id}/>  
            })}
        </>
    )
}
