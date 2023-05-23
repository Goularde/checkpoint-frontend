import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getCountry } from "../graphql/getCountry";
import ReactCountryFlag from "react-country-flag";

function Country() {
  const { state } = useLocation();
  const { loading, error, data } = useQuery(getCountry, {variables: {code: state}});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const country = data?.country;
  return (
    <>
        <h1>{country.name}</h1>
        <ReactCountryFlag countryCode={country.code} svg style={{
                    width: '5em',
                    height: '5em',
                }}/>
        <ul className="countryList">
          <li>Currency : {country.currency}</li>
          <li>Capital : {country.capital}</li>
        </ul>
        {/* <div className="continentsContainer">
        {data &&
          countries.map(({ code, name }: contry ) => (
            <div className="continentsChild" key={code}>
              <li to={`./country`} state={code}>{name}</li>
            </div>
          ))}
        </div> */}
    </>
  );
}

export default Country;
