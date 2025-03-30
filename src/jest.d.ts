import '@testing-library/jest-dom';

declare global {
  var test: (name: string, fn: () => void) => void;
  var expect: jest.Expect;
  var describe: (name: string, fn: () => void) => void;
  var it: (name: string, fn: () => void) => void;
}
