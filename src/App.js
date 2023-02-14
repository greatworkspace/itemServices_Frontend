
import './App.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import React from 'react';

import ManufacturerSection from './components/Manufacturer';




function App() {
    return (
        <div className="bg-gray-100 w-full item-center justify-center">
             <ManufacturerSection />            
        </div>
    )
}

export default App;
// //import Block from './components/Block.js';
// //import ErrorBoundary from './components/ErrorBoundary.js';
// //import Tabs from './components/Tabs.js';
// //import ItemList from './components/ItemList.js';
// //import {items} from './data.js';
// import Category from './components/Category'
// import Product from './components/product'
// //import cors from 'cors';
// import app from 'cors';

// // function ItemLists () {
// //     return (
// //         <div>
// //              {items.map((item) => (
// //                 <ItemList key={item.url}
// //                           brandname = {item.brandname}
// //                           desription = {item.desription}
// //                           image = {item.image}
// //                 />
// //               ))}
// //         </div>
// //     )
// // }
// var corsOptions = {
//     origin: "http://localhost:3000"
// };

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next();
// })

// //app.use(cors(corsOptions));

// function App() {
//     //const [selectedIndex, setSelectedIndex] = useState(0);



//   return (

//         <section className="container m-4 p-4 lg: w-full overflow-hidden shadow-lg rounded-lg">
//             <main >
//             <header><h2 className="title-font font-bold text-gray-700   mt-2 sm: text-xl px-4">Items and Services</h2></header>
//             <Category />
//             <Product />
//             </main>
//             {/* <Tabs className="text-xl font-bold"
//                 tabs = {[
//                     {title: "A", content: <ItemLists /> },
//                     {title: "B", content: <ItemLists /> },
//                     {title: "C", content: "Test Content" },
//                     {title: "D", content: "Test Content D" },
//                     {title: "E", content: <ItemLists /> },
//                     {title: "F", content: <ItemLists /> },
//                     {title: "Y", content: <ItemLists /> },
//                 ]}
//                 selectedIndex= {selectedIndex}
//                 onChangeSelectedIndex = {setSelectedIndex}
//             /> */}
//         </section>


//   );
// }

// export default App;
