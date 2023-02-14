import React from 'react';
import logo from '../logo.svg';
import logo_1 from '../logo_1.svg';
import logo_2 from '../logo_2.svg';


export default function NavBar () {
    function LogoDisplay() {
        return (
            <>
                <div className = "flex mr-56">
                <img src={ logo } alt = "logo"/>
                <main><img src={ logo_1 } alt = "logo"/>
                <img src={ logo_2 } alt = "logo"/></main>   
                </div>               
                
            </>
        )
    }
    return(
        <>
            <main className = "flex mx-8 p-2 space-x-64">
                <LogoDisplay />
                

                <ul className = "flex space-x-4">
                    <li className = "font-bold text-lg">Dashboard</li>
                    <li className = "font-bold text-lg">Location</li>
                    <li className = "font-bold text-lg">Notifications</li>
                    <li className = "font-bold text-lg">ADD ITEM</li>
                </ul>

            </main>
        </>
    )
}