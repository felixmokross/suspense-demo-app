import { useQuery } from "@tanstack/react-query";
import { fetchFromHolidayApi } from "../util";

export function useCountries() {
  const { data } = useQuery(countriesQuery());
  if (!data) throw new Error("No data");
  return data;
}

function countriesQuery() {
  return {
    queryKey: ["countries"],
    queryFn: getCountries,
  };
}

async function getCountries() {
  return (
    (await fetchFromHolidayApi("availablecountries")) as AvailableCountry[]
  ).sort((a, b) => a.name.localeCompare(b.name));
}

export type AvailableCountry = {
  countryCode: string;
  name: string;
};
