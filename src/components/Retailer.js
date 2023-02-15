import React from 'react';
import img_1 from '../img/img_1.svg';


export default function RetailerSection ({data, displayContent}) {
    
    function RetailStore ({name, capacity}) {
        return (
            <>
                <main className = "box-content lg:h-70 lg:w-96 border-2 item-center display:inline-block rounded shadow-md hover:shadow-xl hover:border-red-600 hover:border-4 md:h-64 md:w-32">
                    <img className = "object-none object-top bg-yellow-300 lg:w-96 lg:h-32 md:h-32 md:w-16 rounded-lg" src={img_1} alt = {'Display'}/>
                    <article className="p-2 text-sm">
                        <p className = "text-sm font-bold leading-normal teacking wide">Capacity : {capacity} </p>
                        <p className = "text-sm font-bold">Route :  </p>
                        <p className = "text-sm font-bold">Safety :  </p>
                        <p className = "text-sm font-bold">Terms :  </p>
                        <p className = "text-sm font-bold">Location :  </p>

                        <p className = "text-right italic text-red-600 font-normal  ">continue reading</p>
                    </article>                   
                </main>
            </>
        )
    }
    return (
        <>
            <main className = "lg:grid gap-4 grid-cols-3 grid-rows-3 md:grid gap-4">
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