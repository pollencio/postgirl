import React, { useState } from 'react';

const AppContext = React.createContext([
  { request: {}, response: {} },
  () => {},
]);

const AppProvider = (props) => {
  const [state, setState] = useState({ request: {}, response: {} });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
