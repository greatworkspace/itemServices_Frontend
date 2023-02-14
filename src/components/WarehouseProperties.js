import React, {useState} from 'react';
import Selectdropdown from './Selector/dropdown';


export default function RedistributorSection () {
    const title = "Warehouse Properties";
    const [inputValue, setInputValue] = useState();
    const placeHolder = "Enter warehouse";
    const name = [
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
                <Selectdropdown name = {name} title = {title} 
                placeHolder = {placeHolder} 
                inputValue ={inputValue} 
                onInputValue = {setInputValue} 
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