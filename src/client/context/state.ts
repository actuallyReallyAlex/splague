import React from "react";

const StateContext = React.createContext(JSON.stringify({ money: 10 }));

export default StateContext;
