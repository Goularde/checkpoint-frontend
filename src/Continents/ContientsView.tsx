import { Link } from "react-router-dom";
import { getContients } from "../graphql/getContients";
import { useQuery } from "@apollo/client";

type Continent = {
  code: number;
  name: string;
};
function ContientsView() {
  const { loading, error, data } = useQuery(getContients);


  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h1>Continents</h1>
      <div className="continentsContainer">
        {data &&
          data.continents.map(({ code, name }: Continent) => (
            <div className="continentsChild" key={code}>
              <Link to={`countries`} state={code}>{name}</Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default ContientsView;
