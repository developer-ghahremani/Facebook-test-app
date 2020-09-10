import { lazy } from "react";

export default [
  {
    component: lazy(() => import("./pages/Home")),
    path: "/",
  },
  {
    component: lazy(() => import("./pages/MobileVerification")),
    path: "/MobileVerification",
  },
  {
    component: lazy(() => import("./pages/Auth")),
    path: "/auth",
  },
];
