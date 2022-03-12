import styled from "styled-components";
import { Modal as StyledModal, Button, Input, Alert } from 'antd';
import COLORS from "@/constants/colors";

export const Modal = styled(StyledModal)`
  .ant-modal-header {
    border-bottom: none;
    position: relative;
  }
`;

export const ModelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1rem 0;
  font-style: italic;
  font-size: 1.5rem;
  word-spacing: 0.5rem;
  font-weight: 400;

  &&&:last-child:before {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 3px solid ${COLORS.BLACK};
    width: 8%;
  }
`;

export const FormArea = styled.div`
  width: 80%;
  margin auto;
`;

export const FormInput = styled(Input).attrs({
  allowClear: true,
  size: 'large',
})``;

export const LargeButton = styled(Button).attrs({
  type: 'primary',
  size: 'large'
})`
  width: 100%;
`;

export const SendButton = styled(LargeButton)`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const ErrorMsg = styled(Alert).attrs({
  type: 'error',
  showIcon: true,
})``;
