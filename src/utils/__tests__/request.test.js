import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Descriptions, notification } from 'antd';
import * as requestModule from '../request';

const { request, showErrorNotification } = requestModule;

const mockRequestOptions = {
  url: 'https://mock.com/api/mock-url/',
  data: { name: 'mock-name', email: 'mock@email.com' },
};

const mockRequest = {
  ...mockRequestOptions,
  method: 'POST',
};

describe('utils - request function - positive', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mock.reset();
  });

  it('should send a POST call when calling request function if no request method is provided', async () => {
    // given
    mock.onPost(mockRequestOptions.url).replyOnce(200);

    // when
    await request(mockRequestOptions);

    // then
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].url).toBe(mockRequestOptions.url);
    expect(mock.history.post[0].data).toEqual(
      JSON.stringify(mockRequestOptions.data),
    );
    expect(mock.history.post[0].method).toBe(mockRequest.method.toLowerCase());
  });

  it('should return `response.data` when API call is successful', async () => {
    const mockResult = 'mock-result';
    mock.onPost(mockRequestOptions.url).replyOnce(200, mockResult);

    const result = await request(mockRequestOptions);

    expect(result).toStrictEqual(mockResult);
  });
});

describe('utils - request function - negative', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mock.reset();
  });

  it('should call `showErrorNotification` when API call fails', async () => {
    const mockErrorResult = { errorMessage: 'Network Error' };
    mock.onPost(mockRequestOptions.url).replyOnce(400, mockErrorResult);

    const mockShowNotification = jest.spyOn(
      requestModule,
      'showErrorNotification',
    );

    try {
      await request(mockRequestOptions);

      // Check if the method is triggerred.
      expect(mockShowNotification).toBeCalledWith(mockRequest);
    } catch (error) {
      // Check if exception is thrown
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(mockErrorResult.errorMessage);
    }
  });

  it.each([undefined, null, {}])(
    'throws error on null/undefined or empty object options',
    async (option) => {
      try {
        await request(option);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(
          'You must pass request options to this function!',
        );
      }
    },
  );
});

describe('utils - showErrorNotification - positive', () => {
  it('not throwing errors if nothing passed to the function', () => {
    const spy = jest.spyOn(notification, 'error');
    const params = {};
    showErrorNotification(params);

    expect(spy).toBeCalled();
  });

  it('calling `notification.error` with proper messages passed from params', () => {
    const spy = jest.spyOn(notification, 'error');
    const params = { title: 'mock-title', content: 'mock-content' };
    showErrorNotification(params);

    expect(spy).toBeCalledWith({
      message: params.title,
      description: params.content,
    });
  });
});
