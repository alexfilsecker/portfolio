import { ReactNode } from "react";

type MarginContainerProps = {
  children: ReactNode;
};

const MarginContainer = ({ children }: MarginContainerProps): JSX.Element => {
  return (
    <div className="px-10 sm:px-16 md:px-24 lg:px-32 border-y-2">
      {children}
    </div>
  );
};

export default MarginContainer;
