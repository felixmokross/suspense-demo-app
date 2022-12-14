import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import { FallbackProps } from "react-error-boundary";
import { cn } from "./classnames";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export function Heading({ children }: PropsWithChildren<{}>) {
  return <h3 className="text-2xl font-medium text-slate-900">{children}</h3>;
}

export function LoadingIndicator() {
  return <p className="italic text-gray-900 animate-pulse">Loading…</p>;
}

export function Link({ className, children, ...props }: RouterLinkProps) {
  return (
    <RouterLink
      className={cn("hover:underline text-sky-600", className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
}

export function ErrorMessage({ resetErrorBoundary, error }: FallbackProps) {
  return (
    <div className="text-red-700 bg-red-50 py-4 px-8 rounded-lg text-center">
      <div className="font-medium flex items-center justify-center gap-2">
        <p>Oh no, an error occurred! </p>
        <Button onClick={() => resetErrorBoundary()}>Try again</Button>
      </div>
    </div>
  );
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
