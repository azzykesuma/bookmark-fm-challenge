import { ReactNode } from "react";

const MainLayout = ({ children }: {children : ReactNode}) => {
  return <main className="overflow-hidden relative">{children}</main>;
};

export default MainLayout;
