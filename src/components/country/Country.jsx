import { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountries }) => {
    console.log(country)
    const { name, flags, population, region, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
    }

    console.log(handleVisitedCountries)

    return (
        <div className={`country ${visited? 'visited': 'non-visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{color: visited?'purple': 'blue'}}>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Mark Visited</button><br />
            <button onClick={handleVisited}>{visited? 'Visited': 'Going'}</button><br />
            {visited ? 'I have visited this country.': 'I want to visit this country'}

        </div>
    );
};

export default Country;