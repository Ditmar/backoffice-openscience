export default new Proxy(
  {},
  {
    get: (target, prop) => (typeof prop === 'string' ? prop : ''),
  },
);
