import { Suspense } from "react";
import { Heading, LoadingIndicator } from "./components";
import { CountryList } from "./country-list";

export function HomePage() {
  return (
    <div className="space-y-4">
      <Heading>Countries</Heading>
      <p>Select the country for which you would like to know the holidays:</p>

      <Suspense fallback={<LoadingIndicator />}>
        <CountryList />
      </Suspense>
    </div>
  );
}
