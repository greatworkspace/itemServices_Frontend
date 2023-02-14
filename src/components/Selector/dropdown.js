import React, {useState} from 'react';
import {BiChevronDown} from "react-icons/bi";
//import {AiOutlineSearch} from "react-icons/ai";

export default function Selectdropdown ({name, title, placeHolder }) {
    const[open, setOpen] = useState(false);
    //state to search through the list
    //const [inputValue, setInputValue] = useState();
    //selecteing each option
    const [selected, setSelected] = useState(title);
    

    return (
        <>
            <div className = "w-72 font medium h-80 ">
                <div 
                    onClick = {() => setOpen(!open)}
                    className = "bg-white w-full p-2 flex item-center justify-between rounded">
                   
                    {selected}
                    <BiChevronDown size = {20} />
                </div>
                <ul className={`bg-white mt-2 overflow-y-auto ${
                    open ? "max-h-60" : "max-h-0"
                }`}  >
                    {/* <div className = "flex items-center px-2">
                        <AiOutlineSearch size = {18} 
                        className = "text-gray-700"/>
                        <input 
                            type = "text" 
                            placeholder= {placeHolder}
                            value = {inputValue}
                            onChange = {(e) => setInputValue(e.target.value.toLowerCase())}
                            className = "placeholder: text-gray-700 p-2 outline-none "/>
                    </div> */}
                    
                    {name.map((each) => (
                        <li key = {each.id} 
                            className = "p-2 text-sm hover:bg-red-600 hover:text-white cursor: pointer"
                            onClick = {() => {
                                if(each.name.toLowerCase() !== selected.toLowerCase()){
                                    setSelected(each.name);
                                }
                            } }                            
                            >
                            {each.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

// className = {`p-2 text-sm hover:bg-red-600 hover:text-white ${
//     each.name.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
// }`}
