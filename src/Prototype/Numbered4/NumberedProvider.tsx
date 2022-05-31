import React, { createContext } from "react";

export interface INumberedProps {
  config: Record<string, Array<Array<string> | string>>;
}
export interface INumberedContext {
  // hasNumbered(name: string): boolean;
}
export const NumberedContext = createContext<INumberedContext>({
  // hasNumbered: (name) => !!name
});

export const NumberedProvider: React.FC<INumberedProps> = ({
  children,
  step
}) => {
  const numberRef = React.useRef(0);

  const value = React.useMemo<INumberedContext>(() => ({ numberRef, step }), [
    step
  ]);

  numberRef.current = 0;
  return (
    <NumberedContext.Provider value={value}>
      {children}
    </NumberedContext.Provider>
  );
};

type useNumberedReturnType = {
  // hasPermission(name: string): boolean
};

export const useNumbered = (): useNumberedReturnType => {
  const context = React.useContext(NumberedContext);
  if (context === undefined) {
    throw new Error("useNumbered must be used within a NumberedProvider");
  }

  return context;
};
