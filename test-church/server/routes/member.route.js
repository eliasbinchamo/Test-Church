const controller = require("../controllers/member.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/member/list",
    controller.list
  );
  app.post(
    "/api/member/create",
    controller.create
  );
  app.delete(
    "/api/member/remove",
    controller.remove
  );
  app.delete(
    "/api/member/remove",
    controller.removeById
  );
  app.put(
    "/api/member/update",
    controller.update
  );
};