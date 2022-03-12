import { FC } from "react";
import { PageHeader } from "./styled";

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <PageHeader title={title} />
  );
};

export default Header;
