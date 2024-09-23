import React, { useState, useEffect } from 'react';
import Search from './components/Search.jsx';
import corolla from './components/corolla.jpg';

function App() {
    const [results, setResults] = useState([]);



    return( 
    <div>
        <h1>Autoliste</h1>
        <p>Suche nach einem beliebigen Modell.</p>
        <Search 
            setResults={setResults}/>
            <div> 
                {results.map(result => (
                    <div style={{margin: "10px"}} key={result.id}>
                        <strong>ID:</strong> {result.id} <br />
                        <strong>Model:</strong> {result.model} <br />
                        <strong>Brand:</strong> {result.make} <br />
                        <strong>Year:</strong> {result.year} <br />
                        <strong>Price:</strong> {result.price} <br />
                        {/* Only Corolla has its own image, use the fake image for everything else */}
                        <img src={result.model === "Corolla" ? corolla : result.image} alt= "image of {result.model}" style = {{width: "200px" ,marginTop: "30px"}}/>
                    </div>
                ))}
            </div>

            <button type="button" class="btn btn-secondary"style = {{margin: "10px"}} 
            onClick={() => setResults([])}>Clear</button>
        </div>
        
    );
}

export default App;