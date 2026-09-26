import { use } from "react";
import Country from "../country";

function Countries({ countriesPromise }) {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h3>In the countries: {countries.length}</h3>
            {
                countries.map(country => (
                    // 1. Pass a unique key (cca3 is standard for restcountries)
                    // 2. Pass the country object down as a prop: country={country}
                    <Country 
                        key={country.cca3 || country.name.common} 
                        country={country} 
                    />
                ))
            }
        </div>
    );
}

export default Countries;