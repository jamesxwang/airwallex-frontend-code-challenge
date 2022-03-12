import styled from "styled-components";
import { Layout, Typography, Button } from "antd";
import COLORS from "@/constants/colors";
import { HEADER_HEIGHT, FOOTER_HEIGHT, MELBOURNE_IMAGE } from "@/constants/miscellaneous";
import {
  UpToLaptop,
  UpToTabletWidth,
  UpToContentPageWidth,
  UpToMobileWidth,
  MobileVersion,
} from '@/utils/mediaQueries';

const { Text } = Typography;

export const ContentLayout = styled(Layout.Content)`
  padding: 0;
  min-height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: -moz-linear-gradient(to bottom, ${COLORS.WHITE_FADED}, ${COLORS.BLACK_FADED}), url(${MELBOURNE_IMAGE});
  background-image: -webkit-linear-gradient(to bottom, ${COLORS.WHITE_FADED}, ${COLORS.BLACK_FADED}), url(${MELBOURNE_IMAGE});
  background-image: -ms-linear-gradient(to bottom, ${COLORS.WHITE_FADED}, ${COLORS.BLACK_FADED}), url(${MELBOURNE_IMAGE});
  background-image: linear-gradient(to bottom, ${COLORS.WHITE_FADED}, ${COLORS.BLACK_FADED}), url(${MELBOURNE_IMAGE});
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderTitleArea = styled.div`
  margin: 1rem 0;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled(Text)`
  color: ${COLORS.WHITE};
  font-size: 56px;
  font-weight: 500;
  margin: 0;
  word-spacing: 0.2em;
  letter-spacing: 0.08em;
  @media screen and ${UpToLaptop} {
    font-size: 56px;
  }
  @media screen and ${UpToTabletWidth} {
    font-size: 48px;
  }
  @media screen and ${UpToContentPageWidth} {
    font-size: 40px;
  }
  @media screen and ${UpToMobileWidth} {
    font-size: 32px;
  }
  @media screen and ${MobileVersion} {
    font-size: 32px;
  }
`;

export const HeaderSubTitle = styled(Text)`
  font-size: 20px;
  margin: 1rem 0;
  word-spacing: 0.1em;
  letter-spacing: 0.1em;
  color: ${COLORS.VERYLIGHTGREY};

  @media screen and ${UpToLaptop} {
    font-size: 20px;
  }
  @media screen and ${UpToTabletWidth} {
    font-size: 18px;
  }
  @media screen and ${UpToContentPageWidth} {
    font-size: 16px;
  }
  @media screen and ${UpToMobileWidth} {
    font-size: 14px;
  }
  @media screen and ${MobileVersion} {
    font-size: 12px;
  }
`;

export const RequestButton = styled(Button).attrs({
  // size: 'large'
})`
  margin: 1rem;
  padding: 1rem;
  width: 250px;
  height: 70px;
  font-size: large;
  letter-spacing: 0.1rem;

  @media screen and ${UpToLaptop} {
    width: 250px;
    height: 70px;
  }
  @media screen and ${UpToMobileWidth} {
    font-size: 14px;
    width: 200px;
    height: 60px;
  }
`;
