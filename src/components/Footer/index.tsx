import { FC } from "react";
import { PageFooter, FooterItem } from "./styled";
import { COPYRIGHT_YEAR } from "@/constants/miscellaneous";

const Footer: FC = () => {
  return (
    <PageFooter>
      <FooterItem>Made with &hearts; in Melbourne.</FooterItem>
      <FooterItem>&copy; {COPYRIGHT_YEAR} Broccoli &amp; Co. All Rights Reserved.</FooterItem>
    </PageFooter>
  );
};

export default Footer;
