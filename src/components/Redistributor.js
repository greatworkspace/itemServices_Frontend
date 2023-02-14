import React from 'react';
import Selectdropdown from './Selector/dropdown';


export default function RedistributorSection () {
    const title = "Redistributor list";
    
    const placeHolder = "Enter redributor";
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

    function DisplayList() {
        return (
            <>
                <Selectdropdown 
                    name = {list} 
                    title = {title} 
                    placeHolder = {placeHolder}                 
                />                
            </>
        )
    }
    return (
        <>
            
            <DisplayList />
        </>
    )
}