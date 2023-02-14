import React from 'react';


export default function RetailerSection ({data}) {
    
    function RetailStore ({name, capacity}) {
        return (
            <>
                <main className = "box-content h-64 w-96 m-2 border-2 item-center display: inline-block rounded-lg">
                    <img className = "object-none object-top bg-yellow-300 w-96 h-32" alt = {'Display'}/>
                    <article className="p-2">
                        <p>Name of Retail store:{name} </p>
                        <p>Capacity: {capacity} </p>
                    </article>
                    
                </main>
            </>
        )
    }
    return (
        <>
            <div className = "grid gap-2 grid-cols-3 grid-rows-3">
                {data.map((each) =>{
                            return(
                                <main className = "m-4" key = {each.id}>                            
                                <article><RetailStore name= { each.name } capacity ={ each.capacity}/></article>  
                                </main>

                            )
                    })}
            </div>
        </>
    )
}