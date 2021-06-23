import React from 'react'
import { ItemCount } from '../ItemCount'

export const Item = ({producto}) => {
    return (

               <div className="card col-md-4">
                 <div className="card-body">
                       <h4 className="card-title">{producto.nombre}</h4>
                       <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid animi harum nemo voluptas unde autem? Tempore possimus maxime soluta voluptatibus quae totam, reprehenderit expedita molestiae illo, fugit ad accusantium.</p>
                       <h4>{producto.precio}</h4>
                       <ItemCount stock={producto.stock}/>
                   </div>
               </div>
    )
       
}
