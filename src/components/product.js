import React from "react";
import sevenUp from '../img/sevenUp.svg';
import fanta from '../img/fanta.svg';
import sch from '../img/sch.svg';
import spr from '../img/spr.svg';

export default function ProductSection() {

    const manufacturerName = "ABC MANUFACTURING LTD."


    function ProductCategory() {
        return (
            <>
                <h2 className = " font-bold text-xl mb-8">PRODUCT</h2>
                <main className = "lg:flex space-x-16 p-4 md: block ">
                    <img src={sch} alt="alt" className = "rounded-full h-28 hover: bg-red-600" />
                    <img src={spr} alt="alt" className = "rounded-full h-28 hover: bg-red-600" />
                    <img src={fanta} alt="alt" className = "rounded-full h-28" />
                    <img src={sevenUp} alt="alt" className = "rounded-full h-28" />
                </main>
            </>
        )        
    }
    function ProductTable() {
        return (
            <>
                <table class="border-collapse mt-8 hover:border-spacing-2 w-full text-center">
                    <thead className = "h-16  bg-red-600 text-white">
                        <tr>
                        <th class="border border-slate-600 ...">ITEMS</th>
                        <th class="border border-slate-600 ...">WAREHOUSE</th>
                        <th class="border border-slate-600 ...">UNITS</th>
                        <th class="border border-slate-600 ...">PERFORMANCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="border border-slate-700 ...">Scheweppes Bitter Lemon</td>
                        <td class="border border-slate-700 ...">(Warehouse details)</td>
                        <td class="border border-slate-700 ...">50PKTS / hr <br/>350 PKTS / day<br/>2,000 PKTS / week</td>
                        <td class="border border-slate-700 ...">star</td>
                        </tr>
                        <tr>
                        <td class="border border-slate-700 ...">Scheweppes Bitter Lemon</td>
                        <td class="border border-slate-700 ...">(Warehouse details)</td>
                        <td class="border border-slate-700 ...">50PKTS / hr <br/>350 PKTS / day<br/>2,000 PKTS / week</td>
                        <td class="border border-slate-700 ...">star</td>
                        </tr>
                        <tr>
                        <td class="border border-slate-700 ...">Scheweppes Bitter Lemon</td>
                        <td class="border border-slate-700 ...">(Warehouse details)</td>
                        <td class="border border-slate-700 ...">50PKTS / hr <br/>350 PKTS / day<br/>2,000 PKTS / week</td>
                        <td class="border border-slate-700 ...">star</td>
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

