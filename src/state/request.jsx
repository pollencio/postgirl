import React, { useState } from 'react';

const RequestContext = React.createContext([{}, () => {}]);

const RequestProvider = (props) => {
  const [request, setRequest] = useState({});

  return (
    <RequestContext.Provider value={[request, setRequest]}>
      {props.children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestProvider };
