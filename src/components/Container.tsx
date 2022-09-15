import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`max-w-4xl w-full ${className}`}>{children}</div>;
};

export default Container;
