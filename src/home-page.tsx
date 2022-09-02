import { CountryList } from "./country-list";

export function HomePage() {
  return (
    <>
      <p>Select the country for which you would like to know the holidays:</p>

      <CountryList />
    </>
  );
}
