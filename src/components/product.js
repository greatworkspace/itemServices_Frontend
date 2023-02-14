import {useEffect} from "react";

export default function Product() {

    useEffect(() => {
        fetch('http://127.0.0.1:8000/itemCategories/api', {
            mode: 'no-cors',})
        .then(response => response.json())
        .then(json => console.log(json))
        }, []);

    return (
        <div>
            Different ways to fetch Data
        </div>
    );
}

