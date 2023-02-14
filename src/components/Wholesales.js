import React, {useState} from 'react';
import { dataset } from '../data';
import RetailerSection from './Retailer';


export default function WholesalesSection ({data}) {
    // const data = props.data;
   // const wholesaleCategory = ["Wholesales 1", "Wholesales 2", "Wholesales 3", "Wholesales 4", "Wholesales 5"]


    function handleClick (data) {
        console.log("Clicked")
        //data.filter((each) => each.wholesales === 'wholesales 1')
        //console.log(data.id)
    }


    //how do I display the data array to --------------------

    function WholesalesStores ({value}) {
        return (
            <button className = "p-2 border-2 rounded-xl" onClick ={() => handleClick()}>{value} </button>
        )
    }

    // function filterCategory() {
    //     data.filter((each) => each.wholesales === wholesaleCategory)
    // }


    return (
        <>
            {data.map((each) =>{
                return(
                    <main className = "m-4" key = {each.id}>
                        <WholesalesStores value = {each.wholesales}/>
                    </main>

                )
            })}
            

        </>
    )
}

// const [value, setValue] = useState(null)

//     function handleClick () {

//         setValue(DisplayRetail())
//     //     //console.log('clicked');
//     }

//     function DisplayRetail () {
//         return (
//         <main className="display: flex">
//             <RetailerSection value = "1" />
//             <RetailerSection value = "2"/>
//             <RetailerSection value = "3" />
//             <RetailerSection value = "4" />
//         </main>)
//     }


//     function WholesalesStores (wholesales) {
//         return (
//             wholesales.map((wholesale) => {
//                 <button className = "p-2 border-2 rounded-xl" onClick={handleClick}>Wholesales stores : { wholesale }  </button>
//             })
//         )
//     }