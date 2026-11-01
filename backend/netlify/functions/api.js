
const serverless = require('serverless-http');
const { app, connectDB } = require('../../server');

const expressHandler = serverless(app);

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDB();

    return await expressHandler(event, context);

  } catch (error) {
    console.error('Function error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Server error occurred.'
      })
    };
  }
};

