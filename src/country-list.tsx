import { Link } from "./components";
import { useCountries } from "./queries/countries";

export function CountryList() {
  const countries = useCountries();
  return (
    <ul className="space-y-1">
      {countries.map((country) => (
        <li key={country.countryCode}>
          <Link to={country.countryCode.toLowerCase()}>{country.name}</Link>
        </li>
      ))}
    </ul>
  );
}
