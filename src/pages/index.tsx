import { useState } from 'react';
import { Layout } from 'antd';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestModal from "@/components/RequestModal";
import {
  ContentLayout,
  HeaderTitleArea,
  HeaderTitle,
  HeaderSubTitle,
  RequestButton,
} from "./styled";

export default function () {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onRequestButtonClick = () => {
    setModalVisible(!modalVisible);
  }

  const onCancelRequest = () => {
    setModalVisible(false);
  }

  const onSendRequest = () => {
    setModalVisible(false);
  }



  return (
    <>
      <Layout>
        <Header title="BROCCOLI &amp; CO." />
        <ContentLayout>
          <HeaderTitleArea>
            <HeaderTitle>A better way</HeaderTitle>
            <HeaderTitle>to enjoy every day.</HeaderTitle>
          </HeaderTitleArea>
          <HeaderSubTitle>Be the first to know when we launch.</HeaderSubTitle>
          <RequestButton onClick={onRequestButtonClick}>Request an invite</RequestButton>
        </ContentLayout>
        <Footer />
      </Layout>
      <RequestModal
        visible={modalVisible}
        handleCancel={onCancelRequest}
        handleOk={onSendRequest}
      />
    </>
  );
}
