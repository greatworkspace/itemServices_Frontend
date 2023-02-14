import React, {useState} from 'react';
import RetailerSection from './Retailer';
import WholesalesSection from './Wholesales';
import bg from '../bg_1.svg';
import RedistributorSection from './Redistributor';
import WarehouseProperties from './WarehouseProperties';

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
                <img className="w-full" src={bg} alt = "Bg_logo"/>
                <div className ="flex m-4 p-4">
                    {/* <WarehouseProperties /> */}
                   <RedistributorSection />
                </div>
            </div>
            {/* <main className="flex mx-2 px-4">
                <WholesalesSection data = {data} /> 
            </main> */}
            <article>
                <RetailerSection data = { data } name= { data.name } capacity ={ data.capacity}/>
            </article>
           
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