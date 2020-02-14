exports.handler = function(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (ex) {
    body = { okay: true };
  }

  callback({
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body || "")
  });
};
