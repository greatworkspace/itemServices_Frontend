import React, { useState } from "react";
import sevenUp from '../img/sevenUp.svg';
import fanta from '../img/fanta.svg';
import sch from '../img/sch.svg';
import spr from '../img/spr.svg';
import {AiOutlineStar} from 'react-icons/ai';

export default function ProductSection() {

    const manufacturerName = "ABC MANUFACTURING LTD."
   

    function ProductCategory() {
        return (
            <>
                <h2 className = " font-bold tracking-wide text-xl mb-8">PRODUCT</h2>
                <main className = "lg:flex lg:space-x-16 lg:p-4 md:block md:space-x-0 md:py-16 ">
                    <img src={sch} alt="alt" className = "rounded-full h-28 hover:border-b-2 hover:rounded-none hover:pb-4 hover:border-red-600" />
                    <img src={spr} alt="alt" className = "rounded-full h-28 hover:border-b-2 hover:rounded-none hover:pb-4 hover:border-red-600"  />
                    <img src={fanta} alt="alt" className = "rounded-full h-28 hover:border-b-2 hover:rounded-none hover:pb-4 hover:border-red-600" />
                    <img src={sevenUp} alt="alt" className = "rounded-full h-28 hover:border-b-2 hover:rounded-none hover:pb-4 hover:border-red-600" />
                </main>
            </>
        )        
    }
    // function Star({ size = 30, fill }) {
    //     return (
    //       <svg
    //         style={{
    //           fill,
    //           color = '#fffff',
    //           width: `${size}px`,
    //           height: `${size * (23 / 24)}px`,
    //           flexGrow: 0,
    //           flexShrink: 0,
    //         }} className = "bg-white"
    //         viewBox="0 0 24 23"
    //         preserveAspectRatio="xMidYMid meet"
    //       >
    //         <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z"></path>
    //       </svg>
    //     );
    // }
    function StarRating () {
        const[coloured, setColoured] = useState(false)
        function handleClick () {
            console.log('Clicked');
            setColoured(!coloured)
        }
        
        return (
            <>
                <AiOutlineStar 
                    size = {30} 
                    value = {coloured} 
                    onClick = {(e) => handleClick(e.target.value)}
                    className = {`white ${coloured ? "bg-yellow-300 ": "white"}`}
                /> 
                
            </>
        )
    }
    function ProductTable() {
        return (
            <>
                <table className="border-collapse mt-8 hover:border-spacing-2 w-full text-center">
                    <thead className = "h-16  bg-red-600 text-white">
                        <tr>
                        <th className="border border-slate-600 ...">ITEMS</th>
                        <th className="border border-slate-600 ...">WAREHOUSE</th>
                        <th className="border border-slate-600 ...">UNITS</th>
                        <th className="border border-slate-600 ...">PERFORMANCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-slate-700 ...">Scheweppes Bitter Lemon</td>
                        <td className="border border-slate-700 ...">(Warehouse details)</td>
                        <td className="border border-slate-700 ...">50PKTS / hr <br/>350 PKTS / day<br/>2,000 PKTS / week</td>
                        <td className="border border-slate-700 ..."><article className = "flex space-x-4"><StarRating /> <StarRating /><StarRating /><StarRating /><StarRating /></article></td>
                        </tr>
                        <tr>
                        <td className="border border-slate-700 ...">Scheweppes Bitter Lemon</td>
                        <td className="border border-slate-700 ...">(Warehouse details)</td>
                        <td className="border border-slate-700 ...">50PKTS / hr <br/>350 PKTS / day<br/>2,000 PKTS / week</td>
                        <td className="border border-slate-700 ..."><article className = "flex space-x-4"><StarRating /> <StarRating /><StarRating /><StarRating /><StarRating /></article></td>
                        </tr>
                        <tr>
                        <td className="border border-slate-700 ...">Scheweppes Bitter Lemon</td>
                        <td className="border border-slate-700 ...">(Warehouse details)</td>
                        <td className="border border-slate-700 ...">50PKTS / hr <br/>350 PKTS / day<br/>2,000 PKTS / week</td>
                        <td className="border border-slate-700 ..."><article className = "flex space-x-4"><StarRating /> <StarRating /><StarRating /><StarRating /><StarRating /></article></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <>
            <main className = ""><h1 className = "text-center font-bold text-2xl mb-8">{manufacturerName}</h1></main>
            <ProductCategory />
            <ProductTable />
        </>
    );
}


