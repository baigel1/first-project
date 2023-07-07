import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Facets = ({ children }: WrapperProps) => {
  return <div>{children}</div>;
};

export default Facets;
