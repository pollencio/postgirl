import React, { useState, createContext } from "react";
import { StateType } from "../types";

type ContextType = {
  state: StateType;
  setState: (cb: any) => void;
};

const INITIAL_APP_STATE: StateType = {
  request: {},
  response: {},
  error: null,
  isLoading: false,
};

const AppContext = createContext<ContextType>({
  state: { ...INITIAL_APP_STATE },
  setState: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<StateType>({ ...INITIAL_APP_STATE });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
