const functions = require("firebase-functions");
const next = require("next");
const url = require("url");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: "next" } });
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    // return service-worker from root
    if (pathname === "/sw.js") {
      res.status(200);
      res.set("Content-Type", "text/javascript");
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      res.send(`console.log('sw registered')`);
    } else {
      // Cache https://firebase.google.com/docs/hosting/functions
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      handle(req, res);
    }
  });
});
