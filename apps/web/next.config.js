const withTM = require("next-transpile-modules")(["glitchtech-ui"]);

module.exports = withTM({
	reactStrictMode: true,
});
