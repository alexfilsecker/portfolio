import { ReactNode } from "react";

type MarginContainerProps = {
  children: ReactNode;
};

const MarginContainer = ({ children }: MarginContainerProps): JSX.Element => {
  return (
    <div className="px-10 sm:px-16 md:px-24 lg:px-40 xl:px-60">{children}</div>
  );
};

export default MarginContainer;
