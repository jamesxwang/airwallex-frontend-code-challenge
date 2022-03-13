import { request } from '@/utils/request';

/**
 * @example { name: "Jane Doe", email: "jandoe@airwallex.com" } => 200
 * @example { name: "Jane Doe", email: "usedemail@airwallex.com" } => 400
 */
export default function requestInvite(data: { name: string; email: string }) {
  return request({
    data,
    url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
  });
}
