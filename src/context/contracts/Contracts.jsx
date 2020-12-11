import React, { createContext, useState } from 'react';

export const ContractContext = createContext();

export default function ContractProvider({ children }) {
  const [buyerContract, setBuyerContract] = useState([]);
  const [profitContract, setProfitContract] = useState([]);

  return (
    <ContractContext.Provider
      value={{
        buyerContract,
        setBuyerContract,
        profitContract,
        setProfitContract
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}
