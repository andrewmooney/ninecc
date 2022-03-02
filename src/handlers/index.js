const filterShows = require('../filterShows');

exports.handler = async (event) => {
  let body = {};

  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Could not decode request: JSON parsing failed',
      }),
    };
  }

  const filteredShows = filterShows(body.payload);
  return {
    statusCode: 200,
    body: JSON.stringify({ response: filteredShows }),
  };
};
