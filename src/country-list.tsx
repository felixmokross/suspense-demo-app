import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCountries } from "./holiday-api";

export function CountryList() {
  const { data } = useQuery(["countries"], getCountries);
  return (
    <ul className="space-y-1">
      {data?.map((country) => (
        <li key={country.countryCode}>
          <Link
            to={country.countryCode.toLowerCase()}
            className="hover:underline text-sky-600"
          >
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
