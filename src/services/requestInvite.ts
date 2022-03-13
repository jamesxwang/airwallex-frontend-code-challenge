import { request } from '@/utils/request';

interface IRequestParams {
  name: string;
  email: string;
}

export const requestUrl =
  'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

/**
 * @example { name: "Jane Doe", email: "jandoe@airwallex.com" } => 200
 * @example { name: "Jane Doe", email: "usedemail@airwallex.com" } => 400
 */
export const requestInvite = (data: IRequestParams) => {
  return request({
    data,
    url: requestUrl,
  });
};

export default requestInvite;
