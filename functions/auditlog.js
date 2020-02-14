exports.handler = function(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (ex) {
    body = { ok: true };
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body || "")
  });
};
