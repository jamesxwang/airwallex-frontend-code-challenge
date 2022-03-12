import styled from "styled-components";
import { PageHeader as StyledPageHeader } from "antd";

import COLORS from "@/constants/colors";
import { HEADER_HEIGHT } from "@/constants/miscellaneous";
import { FullWidth } from "@/utils/globalStyled";
import {
  UpToLaptop,
  UpToTabletWidth,
  UpToContentPageWidth,
  UpToMobileWidth,
  MobileVersion,
  MobileVersionXS,
} from '@/utils/mediaQueries';

export const PageHeader = styled(StyledPageHeader)`
  &&& {
    ${FullWidth};
    background: ${COLORS.WHITE};
    height: ${HEADER_HEIGHT}px;
    padding: 0 400px;
    display: flex;
    font-size: 20px;
    .ant-page-header-heading {
      display: flex;
      align-items: center;
    }
    .ant-page-header-heading-title {
      word-spacing: 0.3em;
      letter-spacing: 0.1em;
    }
    @media screen and ${UpToLaptop} {
      padding: 0 400px;
    }
    @media screen and ${UpToTabletWidth} {
      padding: 0 200px;
    }
    @media screen and ${UpToContentPageWidth} {
      padding: 0 100px;
    }
    @media screen and ${UpToMobileWidth} {
      padding: 0 50px;
    }
    @media screen and ${MobileVersion} {
      padding: 0 40px;
      height: ${HEADER_HEIGHT / 1.5}px;
      .ant-page-header-heading-title {
        font-size: 14px;
      }
    }
    @media screen and ${MobileVersionXS} {
      padding: 0 30px;
      height: ${HEADER_HEIGHT / 1.5}px;
      .ant-page-header-heading-title {
        font-size: 14px;
      }
    }
  }
`;
