import React, {useState} from 'react';
import bg from '../img/bg_1.svg';
import RedistributorSection from './Redistributor';
import NavBar from './NavBar';
import ProductSection from './product';
import LogisticsSection from './Logistics';

export default function ManufacturerSection () {

    const [data] = useState([
        { id: 1, wholesales: "Wholesales 1", capacity: "30", stocked: true, name: "Retailer 1" },
        { id: 2, wholesales: "Wholesales 1", capacity: "40", stocked: true, name: "Retailer 2" },
        { id: 3, wholesales: "Wholesales 3", capacity: "50", stocked: false, name: "Retailer 3" },
        { id: 4, wholesales: "Wholesales 4", capacity: "100", stocked: true, name: "Retailer 4" },
        { id: 5, wholesales: "Wholesales 4", capacity: "100", stocked: true, name: "Retailer 5" },
        { id: 6, wholesales: "Wholesales 4", capacity: "100", stocked: true, name: "Retailer 6" }
                      
    ]);    

    return (
        <>
            <div className = " p-4 w-full item-center justify-center">
                {/* Navbar component */}
                <NavBar />

                {/* Background image display */}
                <img src={bg} className = "object-center object-fill w-full" alt = "Bg_logo"/>

                
                <div className ="mt-16 mx-8">
                    {/* Product component */}
                    <ProductSection />

                    {/* logistics Component */}
                    <LogisticsSection />

                    {/* redributors and warehouse properties */}
                   <RedistributorSection data = {data} />

                   
                </div>
                
                
                
            </div>
           
        </>
    )
} 



// let lastwholesales = null;
// const rows = []

// datasets.forEach((data) => {
//     if (data.wholesales !== lastwholesales) {
//         rows.push(
//             <WholesalesSection 
//                 wholesales = {data.wholesales}
//                 key = {data.wholesales} /> 
//         );
//     }
//     rows.push(
//         <RetailerSection 
//             dataset = {data}
//             key = {data.name}/>
//     );
//     lastwholesales = data.wholesales;
//  })