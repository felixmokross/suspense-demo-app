import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { ErrorMessage, Heading, LoadingIndicator } from "./components";
import { CountryPage } from "./country-page";
import { HomePage } from "./home-page";

function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className="p-10 space-y-4">
      <Heading>Holiday Browser</Heading>
      <ErrorBoundary FallbackComponent={ErrorMessage} onReset={reset}>
        <Suspense fallback={<LoadingIndicator />}>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path=":code" element={<CountryPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
