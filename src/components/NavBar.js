import React from 'react';
import logo from '../img/logo.svg';
import logo_1 from '../img/logo_1.svg';
import logo_2 from '../img/logo_2.svg';


export default function NavBar () {
    function LogoDisplay() {
        return (
            <>
                <div className = "flex w-3/5 pl-16">
                    <img src={ logo } alt = "logo"/>
                    <main><img src={ logo_1 } alt = "logo"/>
                    <img src={ logo_2 } alt = "logo"/></main>   
                </div>               
                
            </>
        )
    }
    return(
        <>
            <main className = "lg:flex py-4  md:block ">
                <LogoDisplay />                

                <div className = "lg:flex w-2/5 space-x-4 place-content end sm:block space-x-0 ">
                    <div className = "p-2 font-bold text-based border-1 h-12 hover:bg-red-600 hover:text-white cursor: pointer">Dashboard</div>
                    <div className = "p-2 font-bold text-based border-1 h-12 hover:bg-red-600 hover:text-white cursor: pointer">Location</div>
                    <div className = "p-2 font-bold text-based border-1 h-12 hover:bg-red-600 hover:text-white cursor: pointer">Notifications</div>
                    <div className = "p-2 font-bold text-based border-1 h-12 hover:bg-red-600 hover:text-white cursor: pointer">ADD ITEM</div>
                </div>

            </main>
        </>
    )
}