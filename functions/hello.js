exports.handler = async function (event, context) {

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Welcome to my serverless grocery store.'}),
  };
};
