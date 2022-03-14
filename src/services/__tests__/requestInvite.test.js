import requestInvite, { requestUrl } from '../requestInvite';
import * as requestModule from '@/utils/request';

describe('services - requestInvite', () => {
  it('should call request function with data passed from params', async () => {
    const requestMock = jest
      .spyOn(requestModule, 'request')
      .mockImplementationOnce(jest.fn());
    const requestData = { name: 'mock-name', email: 'mock@email.com' };

    await requestInvite(requestData);

    expect(requestMock).toBeCalledTimes(1);
    expect(requestMock).toBeCalledWith({
      data: requestData,
      url: requestUrl,
    });
  });
});
