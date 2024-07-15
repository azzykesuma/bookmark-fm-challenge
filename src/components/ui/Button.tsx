import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "outline" | "primary" | "shadow";
}

const Button = ({
  children,
  variant,
  className = "",
  ...props
}: ButtonProps) => {
  const classVariants = {
    outline: "border border-white text-white shadow-lg border-[1px] hover:bg-transparent hover:border-[1px] hover:border-soft-red transition transition-all hover:text-soft-red",
    primary:
      "bg-soft-blue border-[1px] text-white shadow-lg hover:bg-transparent hover:text-soft-blue hover:border-[1px] hover:border-soft-blue transition-all",
    shadow:
      " bg-slate-200 border-[1px] text-very-dark-blue shadow-lg  hover:bg-transparent hover:text-grayish-blue hover:border-[1px] hover:border-grayish-blue transition-all",
  };

  return (
    <button
      {...props}
      className={`p-2 font-medium w-full rounded ${classVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
