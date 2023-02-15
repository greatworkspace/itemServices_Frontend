import React from 'react';
import map from '../img/map.svg';

export default function LogisticsSection () {
    function MapOutLocation() {
        return (
            <>
                <main className = "box-content lg:h-72 lg:w-96 border-2 item-center display:inline-block rounded shadow-md hover:shadow-xl hover:border-red-600 hover:border-4 md:h-64 md:w-32">
                    <img className = "object-full bg-yellow-300 lg:w-96 lg:h-56 md:h-32 md:w-16 rounded-lg" src={map} alt = {'Display'}/>
                    <article className="p-2 text-sm">
                        <p className = "text-sm font-bold leading-normal teacking wide">Route : </p>
                        <p className = "text-sm font-bold">Trucks :  </p>
                        
                    </article>                   
                </main>
            </>
        )
    }
    return (
        <>
            <h2 className = " mt-16 font-bold text-xl tracking-wide mb-8">LOGISTICS</h2>
            <main className = "flex space-x-8">
                <MapOutLocation />
                <MapOutLocation />
            </main>
        </>
    )
}