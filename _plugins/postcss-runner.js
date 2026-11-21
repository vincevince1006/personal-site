// Reads CSS on stdin, runs it through the site's postcss.config.js, writes CSS to stdout.
// Called by _plugins/postcss_converter.rb with the site folder as the working directory.

const path = require("path");

const cwd = process.cwd();
const postcss = require(require.resolve("postcss", { paths: [cwd] }));
const config = require(path.join(cwd, "postcss.config.js"));

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  postcss(config.plugins)
    .process(input, { from: undefined })
    .then((result) => {
      result.warnings().forEach((w) => console.error(w.toString()));
      process.stdout.write(result.css);
    })
    .catch((error) => {
      console.error(error.toString());
      process.exit(1);
    });
});
