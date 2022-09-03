import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Link } from "./components";
import { Heading, LoadingIndicator } from "./components";
import { HolidayList } from "./holiday-list";
import { useCountryInfo } from "./queries/country-info";

export function CountryPage() {
  const { countryCode } = useParams();
  if (!countryCode) throw new Error("No country code provided");

  return (
    <div className="space-y-4">
      <p>
        <Link to="..">Back to countries</Link>
      </p>

      <Suspense fallback={<LoadingIndicator />}>
        <CountryHeading countryCode={countryCode} />
      </Suspense>
      <Suspense fallback={<LoadingIndicator />}>
        <HolidayList countryCode={countryCode} />
      </Suspense>
    </div>
  );
}

function CountryHeading({ countryCode }: CountryHeadingProps) {
  const { commonName, region } = useCountryInfo(countryCode);
  return (
    <Heading>
      {commonName} ({region})
    </Heading>
  );
}

type CountryHeadingProps = { countryCode: string };
