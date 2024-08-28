import './country.css'
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, region
    } = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Region
                : {region
                }</p>
        </div>
    );
};

export default Country;