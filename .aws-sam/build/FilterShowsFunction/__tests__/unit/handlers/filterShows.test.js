/**
 * @jest-environment node
 */

const filterShows = require('../../../src/filterShows');
const sample = require('../../../events/sample_request');
const response = require('../../../events/response');

test('Test filterShows function', () => {
  const result = filterShows(sample.payload);
  expect(result).toEqual(response);
});
