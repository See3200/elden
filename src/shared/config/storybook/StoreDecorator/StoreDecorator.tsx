import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: any) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);