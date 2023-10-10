import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // only for test
  setTimeout(() => resolve(import("./LoginForm")), 1500);
}));
