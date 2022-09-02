import {
  PublicHoliday,
  usePublicHolidaysQuery,
} from "./queries/public-holidays";

export function HolidayList({ countryCode }: HolidayListProps) {
  const holidays = usePublicHolidaysQuery(countryCode);

  return (
    <ul className="space-y-2">
      {holidays.map((holiday) => (
        <HolidayListItem
          key={`${holiday.date}-${holiday.name}-${holiday.counties?.join(",")}`}
          holiday={holiday}
        />
      ))}
    </ul>
  );
}

type HolidayListProps = { countryCode: string };

function HolidayListItem({ holiday }: { holiday: PublicHoliday }) {
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
