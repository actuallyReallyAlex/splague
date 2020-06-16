import React from "react";

type ContextProps = {
  isLoading: boolean;
  itemMultiplier: number;
  money: number;
  setIsLoading: any;
  setMoney: any;
};

const StateContext = React.createContext<Partial<ContextProps>>({});

export default StateContext;
