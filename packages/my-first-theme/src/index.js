process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import Root from './components'

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};

export default myFirstTheme
