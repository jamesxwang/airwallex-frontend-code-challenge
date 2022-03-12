import { FC, useState } from 'react';
import { Form, Result, Alert, Checkbox } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import throttle from 'lodash.throttle';
import { Modal, ModelTitle, FormArea, FormInput, SendButton, LargeButton, ErrorMsg } from './styled';
import { requestInvite } from '@/services';

interface IRequestModalProps {
  visible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}

interface IForm {
  fullName: string;
  email: string;
  confirmEmail: string;
}

const noop = () => {};

const RequestModal: FC<IRequestModalProps> = (props) => {
  const { visible, handleOk = noop, handleCancel = noop } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [form] = Form.useForm();

  const onFullNameChanged = throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ fullName: e.target.value });
  }, 200);

  const onEmailChanged = throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ email: e.target.value });
  }, 200);

  const onConfirmEmailChanged = throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ confirmEmail: e.target.value });
  }, 200);

  const onFinish = async (values: IForm) => {
    console.log('Success:', values);
    const { fullName, email } = values;
    try {
      const response = await requestInvite({ name: fullName, email });
      console.log('response: ', response);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setErrorMsg((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    setLoading(false);
  };

  const onClickSendButton = async () => {
    setErrorMsg('');
    setLoading(true);
    form.submit();
  }

  const onOk = () => {
    form.resetFields();
    setSuccess(false);
    handleOk();
  }

  const onCancel = () => {
    form.resetFields();
    setLoading(false);
    setSuccess(false);
    setErrorMsg('');
    handleCancel();
  }

  return (
    <Modal
      centered
      title={<ModelTitle>{success ? "All done!" : "Request an invite"}</ModelTitle>}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      {success ? (
        <Result
          icon={<SmileOutlined />}
          subTitle="You will be one of the first to experience Broccoli &amp; Co. when we launch."
          extra={<LargeButton onClick={onOk}>OK</LargeButton>}
        />
      ) : (
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormArea>
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: 'Please enter your full name!',
                },
              ]}
            >
              <FormInput
                placeholder="Full name"
                onChange={onFullNameChanged}
                onPressEnter={() => {
                  form.getFieldInstance('email').focus();
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email!',
                },
                {
                  type: "email",
                  message: 'Please enter a correct email!',
                }
              ]}
            >
              <FormInput
                placeholder="Email"
                onChange={onEmailChanged}
                onPressEnter={() => {
                  form.getFieldInstance('confirmEmail').focus();
                }}
              />
            </Form.Item>
            <Form.Item
              name="confirmEmail"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your email!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('email') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two emails that you entered do not match!'));
                  },
                }),
              ]}
            >
              <FormInput placeholder="Confirm email" onChange={onConfirmEmailChanged} onPressEnter={onClickSendButton} />
            </Form.Item>
            <SendButton loading={loading} onClick={onClickSendButton}>
              {loading ? "Sending, please wait..." : "Send"}
            </SendButton>
            {errorMsg && <ErrorMsg message={errorMsg} />}
          </FormArea>
        </Form>
      )}
    </Modal>
  );
}

export default RequestModal;
