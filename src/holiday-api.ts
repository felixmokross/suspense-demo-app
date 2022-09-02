export async function getCountries() {
  return (
    (await fetchFromHolidayApi("availablecountries")) as AvailableCountry[]
  ).sort((a, b) => a.name.localeCompare(b.name));
}

export type AvailableCountry = {
  countryCode: string;
  name: string;
};

export async function getCountryInfo(code: string) {
  return (await fetchFromHolidayApi(`countryinfo/${code}`)) as CountryInfo;
}

export type CountryInfo = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[];
};

const currentYear = new Date().getFullYear();
export async function getHolidays(code: string) {
  await delay(1000);
  return (await fetchFromHolidayApi(
    `publicholidays/${currentYear}/${code}`
  )) as Holiday[];
}

export type Holiday = {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[];
  launchYear: number;
  types: string[];
};

async function fetchFromHolidayApi(endpoint: string) {
  const res = await fetch(`https://date.nager.at/api/v3/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return await res.json();
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(undefined), ms));
}
