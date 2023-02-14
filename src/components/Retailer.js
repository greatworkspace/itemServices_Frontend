import React from 'react';
import img_1 from '../img_1.svg';


export default function RetailerSection ({data, displayContent}) {
    
    function RetailStore ({name, capacity}) {
        return (
            <>
                <main className = "box-content h-64 w-96 border-2 item-center display: inline-block rounded">
                    <img className = "object-none object-top bg-yellow-300 w-96 h-32 rounded-lg" src={img_1} alt = {'Display'}/>
                    <article className="p-2 text-sm">
                        <p className = "text-sm font-normal">Capacity: {capacity} </p>
                        <p>Route:  </p>
                        <p>Safety:  </p>
                        <p>Terms:  </p>
                        <p>Location:  </p>
                    </article>
                    
                </main>
            </>
        )
    }
    return (
        <>
            <main className = "grid gap-2 grid-cols-3 grid-rows-3">
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