import { Link, useLocation } from "react-router-dom";
import { getCountries } from "../graphql/getCountries";
import { useQuery } from "@apollo/client";
import ReactCountryFlag from "react-country-flag";

type country = {
  code: string;
  name: string;
  emoji: string;
};
function Countries() {
  const { state } = useLocation();
  const { loading, error, data } = useQuery(getCountries, {
    variables: { code: state },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const countries = data?.continent.countries;
  return (
    <>
      <h1>Countries</h1>
      <div className="continentsContainer">
        {data &&
          countries.map(({ code, name }: country) => (
            <div className="continentsChild" key={code}>
              <Link to={`../country`} state={code}>
                <ReactCountryFlag countryCode={code} svg /> {name}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Countries;
