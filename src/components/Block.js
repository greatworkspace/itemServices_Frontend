import React from 'react';
//import logo from './logo.svg';


interface Props {
	children ?: React.ReactNode;
}
export default function Block ({chidren} : Props) {
	return (
		<div className="App">
          <header className="App-header">
		  <div className = "Block">Name: {chidren}</div>
          </header>
        </div>
	);
}