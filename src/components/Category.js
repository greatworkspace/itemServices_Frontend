//import { getByTitle } from '@testing-library/dom';
import React, {useState} from 'react';
import {categories} from '../data.js'
 



function Button ({title, onClick}){
    return <button onClick= {onClick}>{title}</button>
}



export default function Category () {
    const[arrow, setArrow] = useState([categories])
    const[category, setCategory] = useState(['Pharmaceuticals Product', 'Drinks', 'Healthcare Product']);
    
    // const displayall = ({categories}) => {
    //     <div className ='grid gap-4 grid-cols-3 grid-rows-3'>
    //         {categories.map((category) => (
    //             <div className='display-block' key={category.id}>
    //                 <h4>{category.title}</h4>
    //             </div>                
    //         ))}
    //     </div>
    // }

    

    return(
        <div>
            {/* <h2 className='text-black-700 text-lg font-bold'>Display Categories here</h2> */}
            <div className='flex justify-center space-x-4'>  
                {category.map((eachCategory) => (
                    <li className='p-4 text-lg' >{eachCategory}</li>
                ))}              
                <Button
                    title = '==>'
                    onClick = {(arrow) =>{
                        setCategory([ <div className ='grid gap-4 grid-cols-3 grid-rows-3'>
                            {categories.map((category) => (
                                <div className='display-block' key={category.id}>
                                    <li className='p-4 hover:bg-sky-100 rounded-xl cursor:pointer'>{category.title}</li>
                                </div>                
                                    ))}
                        </div>])}
                    } 
                />
            </div>            
        </div>
        
    )
}