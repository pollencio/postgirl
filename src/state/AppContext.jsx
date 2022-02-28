import React, { useState } from 'react';

const INITIAL_APP_STATE = {
  request: {},
  response: {},
  error: null,
  isLoading: false,
};

const AppContext = React.createContext([{ ...INITIAL_APP_STATE }, () => {}]);

const AppProvider = (props) => {
  const [state, setState] = useState({ ...INITIAL_APP_STATE });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
