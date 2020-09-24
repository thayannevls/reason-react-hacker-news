import { configure } from '@storybook/react'

configure(
  [require.context('../lib/js', true, /.*Story.js$/)],
  module
)

// const req = require.context('../lib/js', true, /.*Story.js$/);
// configure(() => {
//   req.keys().forEach(module => {
//     req(module).default();
//   });
// }, module);