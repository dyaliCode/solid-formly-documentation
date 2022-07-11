import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const makeStore = () =>
  createStore({
    dark: false as boolean,
    // values: {} as Record<string, any>,
    // errors: {} as Record<string, ValidityState>,
  });
export type Store = ReturnType<typeof makeStore>;
const ValidationContext = createContext<Store>();
