import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './contries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountries = country =>{
        console.log('add this to your visited country');
       const newVisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <p key={country.cca3}>{country.name.common}</p> )
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;