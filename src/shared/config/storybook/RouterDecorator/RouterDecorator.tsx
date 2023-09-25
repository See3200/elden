import { BrowserRouter } from "react-router-dom";

/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unsafe-call */
export const RouterDecorator = (Story: any) => {
  return (
    <BrowserRouter>
      {Story()}
    </BrowserRouter>
  )
};