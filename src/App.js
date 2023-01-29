
import './App.css';
import React, {useState} from 'react';
//import Block from './components/Block.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import Tabs from './components/Tabs.js';
import ItemList from './components/ItemList.js';
import {items} from './data.js';
import Category from './components/Category'

function ItemLists () {
    return (
        <div>
             {items.map((item) => (
                <ItemList key={item.url}
                          brandname = {item.brandname}
                          desription = {item.desription}
                          image = {item.image}
                />
              ))}
        </div>
    )
}

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ErrorBoundary  fallback = {<span> Error! </span>}>
        <section className="container m-4 p-4 lg: w-full overflow-hidden shadow-lg rounded-lg"> 
            <main > 
            <header><h2 className="title-font font-bold text-gray-700   mt-2 sm: text-xl px-4">Items and Services</h2></header>
            <Category />
            </main>
            {/* <Tabs className="text-xl font-bold"
                tabs = {[
                    {title: "A", content: <ItemLists /> },
                    {title: "B", content: <ItemLists /> },  
                    {title: "C", content: "Test Content" },
                    {title: "D", content: "Test Content D" },
                    {title: "E", content: <ItemLists /> },
                    {title: "F", content: <ItemLists /> },
                    {title: "Y", content: <ItemLists /> },
                ]}
                selectedIndex= {selectedIndex}
                onChangeSelectedIndex = {setSelectedIndex}
            /> */}
        </section>
        
    </ErrorBoundary>
  );
}

export default App;
