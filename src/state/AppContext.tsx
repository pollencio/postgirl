import React, { useState, createContext } from "react";

export type Request = {
  customData?: any;
  method?: string;
  url?: string;
};
export type Response = {
  customData?: any;
  config?: any;
  data?: any;
  headers?: any;
};

export type State = {
  request: Request;
  response: Response;
  error: string | null;
  isLoading: boolean;
};

type Context = {
  state: State;
  setState: (cb: any) => void;
};

const INITIAL_APP_STATE: State = {
  request: {},
  response: {},
  error: null,
  isLoading: false,
};

const AppContext = createContext<Context>({
  state: { ...INITIAL_APP_STATE },
  setState: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({ ...INITIAL_APP_STATE });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
