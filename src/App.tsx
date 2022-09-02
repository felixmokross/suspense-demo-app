import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { ErrorMessage } from "./components";
import { CountryPage } from "./country-page";
import { HomePage } from "./home-page";

function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className="p-10">
      <ErrorBoundary
        FallbackComponent={ErrorMessage}
        onReset={reset}
        onError={handleError}
      >
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path=":countryCode" element={<CountryPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

function handleError(error: Error) {
  if (process.env.NODE_ENV !== "development") return;

  console.error(error);
}
