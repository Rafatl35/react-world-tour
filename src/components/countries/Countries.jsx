import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './contries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

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
    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited countrie */}
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <p key={country.cca3}>{country.name.common}</p> )
                    }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                    }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;