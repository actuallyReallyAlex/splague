import React from "react";

type ContextProps = {
  buyMultiplier: number;
  isLoading: boolean;
  money: number;
  setIsLoading: any;
  setMoney: any;
};

const StateContext = React.createContext<Partial<ContextProps>>({});

export default StateContext;
