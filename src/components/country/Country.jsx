import { useState } from 'react';
import './country.css'
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, region, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this country.': 'I want to visit this country'}

        </div>
    );
};

export default Country;