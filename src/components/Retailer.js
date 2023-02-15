import React from 'react';
import img_1 from '../img/img_1.svg';


export default function RetailerSection ({data, displayContent}) {
    
    function RetailStore ({name, capacity}) {
        return (
            <>
                <main className = "box-content h-68 w-96 border-2 item-center display:inline-block rounded shadow-md hover:shadow-xl hover:border-4">
                    <img className = "object-none object-top bg-yellow-300 w-96 h-32 rounded-lg" src={img_1} alt = {'Display'}/>
                    <article className="px-2 text-sm">
                        <p className = "text-sm font-bold leading-normal teacking wide">Capacity : {capacity} </p>
                        <p className = "text-sm font-bold">Route :  </p>
                        <p className = "text-sm font-bold">Safety :  </p>
                        <p className = "text-sm font-bold">Terms :  </p>
                        <p className = "text-sm font-bold">Location :  </p>
                    </article>

                    <p className = "text-right italic text-red-600 font-normal p-2 ">continue reading</p>
                    
                </main>
            </>
        )
    }
    return (
        <>
            <main className = "lg:grid gap-4 grid-cols-3 grid-rows-3 ">
                {displayContent && data.map((each) =>{
                            return(
                                <main key = {each.id}>                            
                                <article><RetailStore name= { each.name } capacity ={ each.capacity}/></article>  
                                </main>

                            )
                    })}
            </main>
        </>
    )
}