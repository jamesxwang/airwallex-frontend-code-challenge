import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RequestModal from '../index';

describe('RequestModal component - positive', () => {
  let visible;
  let handleOk = jest.fn();
  let handleCancel = jest.fn();
  const defaultTitle = 'Request an invite';
  const successTitle = 'All done!';

  beforeAll(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(cleanup);

  beforeEach(() => {
    visible = true;
  });

  it('does not render on default', () => {
    visible = false;
    const { baseElement } = render(
      <RequestModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with no errors when provided with props', () => {
    const { baseElement, getByText } = render(
      <RequestModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(baseElement).toMatchSnapshot();

    const modalTitleElements = baseElement.getElementsByClassName('sc-gsDKAQ');
    expect(modalTitleElements.length).toBe(1);
    expect(modalTitleElements[0]).toHaveTextContent(defaultTitle);

    const buttonSubmit = getByText('Send');
    expect(buttonSubmit).toBeInTheDocument();

    expect(() => getByText('Sending, please wait...')).toThrow(
      'Unable to find an element',
    );
  });

  it('triggers on correct width', () => {
    window.innerWidth = 400;
    fireEvent(window, new Event('resize'));
    const { baseElement: before } = render(
      <RequestModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(before).toMatchSnapshot();

    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    const { baseElement: after } = render(
      <RequestModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(after).toMatchSnapshot();

    window.innerWidth = 600;
    fireEvent(window, new Event('resize'));
    const { baseElement: evenafter } = render(
      <RequestModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(evenafter).toMatchSnapshot();
  });

  it('should call `handleCancel` when canceling the modal', () => {
    const { baseElement } = render(
      <RequestModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );

    const buttonsClose = baseElement.getElementsByClassName('ant-modal-close');
    expect(buttonsClose.length).toBe(1);

    fireEvent.click(buttonsClose[0]);
    expect(handleCancel).toBeCalledTimes(1);
    expect(baseElement).toMatchSnapshot();
  });
});
