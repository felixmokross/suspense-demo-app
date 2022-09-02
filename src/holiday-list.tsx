import { useQuery } from "@tanstack/react-query";
import { getHolidays, Holiday } from "./holiday-api";

export function HolidayList({ countryCode }: HolidayListProps) {
  const { data } = useQuery<Holiday[]>(["holidays", countryCode], () =>
    getHolidays(countryCode)
  );

  return (
    <ul className="space-y-2">
      {data!.map((holiday) => (
        <HolidayListItem
          key={`${holiday.date}-${holiday.name}-${holiday.counties?.join(",")}`}
          holiday={holiday}
        />
      ))}
    </ul>
  );
}

type HolidayListProps = { countryCode: string };

function HolidayListItem({ holiday }: { holiday: Holiday }) {
  return (
    <li>
      <span className="text-slate-500">{holiday.date}</span>
      <br />
      <span className="font-medium text-slate-900">
        {holiday.localName}
        {holiday.counties && <> ({holiday.counties.join(",")})</>}
      </span>
    </li>
  );
}
