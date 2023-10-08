import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: any) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);