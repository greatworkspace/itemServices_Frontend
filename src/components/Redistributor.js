import React, { useState } from 'react';
import Selectdropdown from './Selector/dropdown';
import RetailerSection from './Retailer'


export default function RedistributorSection ({data}) {
    const title = "Redistributor";
    const titleW = "Warehouse Properties";
    //change some state
    const [displayContent, setDisplayContent] = useState(true);
    
    const placeHolder = "Enter redributor";
    const placeHolderW = "Search Warehouse";
    //how to filter a dataset and group out an array
    const list = [
        {id:1, name: "Akure"},
        {id:2, name: "Ibadan"},
        {id:3, name: "Lagos"},
        {id:4, name: "Warri"},
        {id:5, name: "Akure"},
        {id:6, name: "Ibadan"},
        {id:7, name: "Lagos"},
        {id:8, name: "Warri"}
    ];    

    function DisplayRedistributorWarehouse() {
        return (
            <>
                <div className="lg:flex mt-16 lg:space-x-32 md:block md:space-x-0">
                   <main> <Selectdropdown
                        name = {list} 
                        title = {title} 
                        placeHolder = {placeHolder} 
                        displayContent = {displayContent}
                        onDisplayContentChange = {setDisplayContent}
                    /></main>

                    <main> <Selectdropdown
                        name = {list} 
                        title = {titleW} 
                        placeHolder = {placeHolderW} 
                        displayContent = {displayContent}
                        onDisplayContentChange = {setDisplayContent}
                    /></main>

                   
                </div>                               
            </>
        )
    }

    

    function DisplayList() {
        return (
            <>                
                <DisplayRedistributorWarehouse />                   
                    
            </>
        )
    }
    return (
        <>            
            <DisplayList />
            <RetailerSection 
                    data = { data } 
                    name= { data.name } 
                    capacity ={ data.capacity}
                    displayContent = {displayContent}
                />  
        </>
    )
}