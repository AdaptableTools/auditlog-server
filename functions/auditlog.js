exports.handler = function(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (ex) {
    body = { ok: true };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: JSON.stringify(body || "")
  };
};
