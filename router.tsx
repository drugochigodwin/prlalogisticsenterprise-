import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

export type RouteState = {
  path: string;
  query: URLSearchParams;
};

function readHash(): RouteState {
  const raw = window.location.hash.replace(/^#/, "");
  const clean = raw.length === 0 ? "/" : raw;
  const [pathPart, queryPart = ""] = clean.split("?");
  const path = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  return {
    path: path.length > 1 ? path.replace(/\/+$/, "") : "/",
    query: new URLSearchParams(queryPart),
  };
}

export function navigate(to: string) {
  const target = to.startsWith("/") ? to : `/${to}`;
  if (window.location.hash === `#${target}`) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = target;
}

const RouterContext = createContext<RouteState>({ path: "/", query: new URLSearchParams() });

export function RouterProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<RouteState>(() =>
    typeof window === "undefined" ? { path: "/", query: new URLSearchParams() } : readHash(),
  );

  useEffect(() => {
    const onChange = () => setState(readHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [state.path]);

  const value = useMemo(() => state, [state]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRoute() {
  return useContext(RouterContext);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
};

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const handle = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (window.location.hash === `#${to}`) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [to, onClick],
  );

  return (
    <a href={`#${to}`} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
