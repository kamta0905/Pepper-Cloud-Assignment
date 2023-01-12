import React from "react";
import { Card } from "semantic-ui-react";
const Header = ({ children, Children }: any) => {
  return <Card className="mx-auto w-100 shadow-sm bg-body rounded">{children}</Card>;
};

export default Header;
