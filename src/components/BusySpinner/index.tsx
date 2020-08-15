import React from "react";

interface Props {
  children: React.ReactNode;
  isBusy?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const BusySpinner: React.SFC<Props> = ({
  children,
  isBusy = false,
  onClick,
}: Props) => {
  if (isBusy) {
    return (
      <span data-id="spinner" onClick={onClick}>
        {children}
      </span>
    );
  }

  return <>{children}</>;
};

export default BusySpinner;
