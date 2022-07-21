// el nombre use en el archivo significa que es un hook
// los hooks son funciones
// funcionan como los funcional components


import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) =>{

    const [state, setState] = useState({
        data:[],
        loading:true
        }
    );

    

    useEffect(() => {
    //renderiza una única vez
        getGifs( category )
            .then(imgs => {
                setState({
                    data:imgs,
                    loading:false
                })
            })
         } ,[category])
    
    /*
    setTimeout( () => {
        setState({
            data:[1,2,3,4,5,6,7],
            loading:false
        })
    },3000);
    */

    return state;
}