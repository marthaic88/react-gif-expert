import React , { useState } from 'react'
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon B'];
    const [categories,setCategories] = useState( ['One Punch']);

    const handleAdd = () => {
        //'HunterXHunter'
        //setCategories([...categories, 'HunterXHunter']);
        setCategories(cats => [...cats,'HunterXHunter']);
    }
  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory  setCategories={setCategories} />
    <hr />
   {/* <button onClick={handleAdd}>Agregar</button>}*/}

    <ol>
        {
            
              categories.map(category=>
               <GifGrid 
                category={category} 
            key={category} />
            )
          

        }
    </ol>
    </>
  )
}

export default GifExpertApp;