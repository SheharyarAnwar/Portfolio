import React from "react";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Link = (props: Props) => {
  return (
    <a className="underlined-link" target="_blank" {...props}>
      {props?.children}
    </a>
  );
};

export default Link;
