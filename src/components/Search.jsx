import { useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function Search({setResults}) {
    const [search, setSearch] = useState("");


    async function CarSearch(event) {
        event.preventDefault();
        const result = await fetch(`https://freetestapi.com/api/v1/cars?search=${search.toLowerCase()}`);
        
        const data = await result.json();
        setResults(data);
        setSearch("");
    };

    return (
        <div>
            <input style = {{width:"350px"}} type="text" value={search} placeholder="Bitte füllen Sie eine Modelle des Autos ein." 
            onChange={(e) => setSearch(e.target.value)} />
            <button class="btn btn-primary" style = {{margin: "10px"}} onClick={CarSearch}>Search</button>
        </div>
    );
};

export default Search;