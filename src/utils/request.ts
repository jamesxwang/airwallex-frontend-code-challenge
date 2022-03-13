import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { notification } from 'antd';

export const showErrorNotification = (title?: string, content?: string) => {
  notification.error({
    message: title || '',
    description: content || '',
  });
};

axios.defaults.timeout = 10000; // 10s timeout

axios.interceptors.request.use((config) => {
  config.headers = {
    'Content-Type': 'application/json',
  };
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    showErrorNotification('', error.message);
    throw error;
  },
);

export const request = async (options: AxiosRequestConfig) => {
  return new Promise((resolve, reject) =>
    axios({
      ...options,
      method: options.method || 'POST',
    })
      .then((res) => resolve(res.data))
      .catch((e) => reject((e as AxiosError).response?.data?.errorMessage)),
  );
};
