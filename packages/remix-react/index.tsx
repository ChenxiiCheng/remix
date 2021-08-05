export type { RemixBrowserProps } from "./browser";
export { RemixBrowser } from "./browser";
export { Outlet } from "react-router-dom";

export type { FormProps, SubmitOptions, SubmitFunction } from "./components";
export {
  Meta,
  Links,
  Scripts,
  Link,
  NavLink,
  Form,
  PrefetchPageLinks,
  LiveReload,
  useFormAction,
  useSubmit,
  useTransition,
  useFetcher,
  useFetchers,
  useLoaderData,
  useActionData,
  useBeforeUnload,
  useMatches,
  // deprecated
  usePendingLocation,
  usePendingFormSubmit,
  useRouteData
} from "./components";

export type { FormMethod, FormEncType } from "./data";

export type { ShouldReloadFunction } from "./routeModules";

export type { RemixServerProps } from "./server";
export { RemixServer } from "./server";
