import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const RevealContext = createContext();

export function useRevealContext() {
  return useContext(RevealContext);
}

export function RevealFactor({ children }) {
  const [delayFactor, setDelayFactor] = useState(0.1);

  const setIncrement = useCallback((i) => {
    setDelayFactor(prev => prev + i);
    console.log('delayFactor', delayFactor);

  });




  return (
    <RevealContext.Provider value={{ delayFactor, setIncrement }}>
      {children}
    </RevealContext.Provider>
  );
}
