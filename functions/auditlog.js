exports.handler = function(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (ex) {
    body = { ok: true };
  }

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body || "")
  });
};
