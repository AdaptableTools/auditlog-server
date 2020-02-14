exports.handler = function(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (ex) {
    body = { okay: true };
  }

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "User-Agent, Content-Type, Referer"
    },
    body: JSON.stringify(body || "")
  });
};
