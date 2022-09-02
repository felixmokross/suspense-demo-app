import { useQuery } from "@tanstack/react-query";
import { delay, fetchFromHolidayApi } from "../util";

export function usePublicHolidaysQuery(countryCode: string) {
  return useQuery(publicHolidaysQuery(countryCode)).data!;
}

function publicHolidaysQuery(countryCode: string) {
  return {
    queryKey: ["publicHolidays", countryCode],
    queryFn: () => getPublicHolidays(countryCode),
  };
}

const currentYear = new Date().getFullYear();
async function getPublicHolidays(code: string) {
  await delay(1000);
  return (await fetchFromHolidayApi(
    `publicholidays/${currentYear}/${code}`
  )) as PublicHoliday[];
}

export type PublicHoliday = {
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
