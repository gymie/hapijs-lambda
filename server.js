const Hapi = require("@hapi/hapi");

(async () => {
  const server = Hapi.server({
    port: 8080,
    host: "0.0.0.0",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
})();
