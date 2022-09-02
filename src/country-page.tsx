import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingIndicator } from "./components";
import { getCountryInfo } from "./holiday-api";
import { HolidayList } from "./holiday-list";

export function CountryPage() {
  const { code } = useParams();
  if (!code) throw new Error("No country code provided");

  return (
    <div className="space-y-4">
      <p className="hover:underline text-sky-600">
        <Link to="../..">Back to countries</Link>
      </p>
      <CountryHeading code={code} />

      <Suspense fallback={<LoadingIndicator />}>
        <HolidayList countryCode={code} />
      </Suspense>
    </div>
  );
}

function CountryHeading({ code }: CountryHeadingProps) {
  const { data } = useQuery(["countries", code], () => getCountryInfo(code));
  if (!data) throw new Error("No data");

  return (
    <h4 className="text-lg font-medium">
      {data!.commonName} ({data!.region})
    </h4>
  );
}

type CountryHeadingProps = { code: string };
