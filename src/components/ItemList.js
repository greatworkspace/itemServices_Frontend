import React from 'react';

interface Props {
	brandname: string;
	image: string;
	// url: string;
	description: string;
}

export default function ItemList ({brandname, image, description} : Props) {
	return (
		<div className="bg-white p-4 m-4 shadow-lg rounded-lg flex break-word pointer">
			<div className="w-1/4">
				<img alt="no jpegs" className="rounded-lg w-12 justify-left items-left" src={image} />	
			</div>
			<div className="w-1/2">
				<h3>{brandname}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}