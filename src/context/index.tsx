import { type ReactNode, createContext, useReducer } from "react";
import { reducer } from "./reducer";

const data = {
  testing: "testing context",
};

export const GlobalContext = createContext<{ state: any; dispatch: any }>({
  state: data,
  dispatch: "",
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
