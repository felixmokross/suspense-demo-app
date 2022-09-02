import { useQuery } from "@tanstack/react-query";
import { delay, fetchFromHolidayApi } from "../util";

export function useCountryInfo(countryCode: string) {
  return useQuery(countryInfoQuery(countryCode)).data!;
}

function countryInfoQuery(countryCode: string) {
  return {
    queryKey: ["countryInfo", countryCode],
    queryFn: () => getCountryInfo(countryCode),
  };
}

async function getCountryInfo(code: string) {
  await delay(200);
  return (await fetchFromHolidayApi(`countryinfo/${code}`)) as CountryInfo;
}

export type CountryInfo = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[];
};
